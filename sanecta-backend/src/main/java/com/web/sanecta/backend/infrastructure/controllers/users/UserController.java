package com.web.sanecta.backend.infrastructure.controllers.users;

import com.web.sanecta.backend.application.interfaces.CreateUserInterface;
import com.web.sanecta.backend.application.interfaces.ListUsersInterface;
import com.web.sanecta.backend.application.interfaces.AuthenticateUserInterface;
import com.web.sanecta.backend.domain.entity.User;

import com.web.sanecta.backend.infrastructure.controllers.users.UserDTOMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("users")
public class UserController {
    private final CreateUserInterface createUserInterface;
    private final ListUsersInterface listUsersInterface;
    private final AuthenticateUserInterface authenticateUserInterface;
    private final UserDTOMapper userDTOMapper;

    public UserController(CreateUserInterface createUserInterface, ListUsersInterface listUsersInterface, AuthenticateUserInterface authenticateUserInterface, UserDTOMapper userDTOMapper) {
        this.createUserInterface = createUserInterface;
        this.listUsersInterface = listUsersInterface;
        this.authenticateUserInterface = authenticateUserInterface;
        this.userDTOMapper = userDTOMapper;
    }

    @PostMapping
    CreateUserResponse createUser(@RequestBody CreateUserRequest request){
        User userObj = userDTOMapper.toUser(request);
        User user = createUserInterface.createUser(userObj);
        return userDTOMapper.toResponse(user);
    }

    @GetMapping
    List<GetUsersResponse> getUsers(){
        List<User> users = listUsersInterface.listUsers();
        return users.stream()
                .map(user -> new GetUsersResponse(user.getUsername(), user.getEmail()))
                .toList();
    }

    @PostMapping("/authenticate")
    LoginResponse authenticate(@RequestBody LoginRequest request){
        try {
            User user = authenticateUserInterface.authenticate(request.email(), request.password());
            return new LoginResponse(user.getUsername(), user.getEmail(), "Login bem-sucedido");
        } catch (RuntimeException e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
