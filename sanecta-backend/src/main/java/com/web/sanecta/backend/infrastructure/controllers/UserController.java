package com.web.sanecta.backend.infrastructure.controllers;

import com.web.sanecta.backend.application.interfaces.CreateUserInterface;
import com.web.sanecta.backend.domain.entity.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
public class UserController {
    private final CreateUserInterface createUserInterface;
    private final UserDTOMapper userDTOMapper;

    public UserController(CreateUserInterface createUserInterface, UserDTOMapper userDTOMapper) {
        this.createUserInterface = createUserInterface;
        this.userDTOMapper = userDTOMapper;
    }

    @PostMapping
    CreateUserResponse createUser(@RequestBody CreateUserRequest request){
        User userObj = userDTOMapper.toUser(request);
        User user = createUserInterface.createUser(userObj);
        return userDTOMapper.toResponse(user);
    }
}
