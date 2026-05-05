package com.web.sanecta.infrastructure.presentation;

import com.web.sanecta.core.usecases.LoginUserUseCase;
import com.web.sanecta.core.usecases.RegisterUserUseCase;
import com.web.sanecta.infrastructure.dto.LoginUserRequest;
import com.web.sanecta.infrastructure.dto.LoginUserResponse;
import com.web.sanecta.infrastructure.dto.RegisterUserRequest;
import com.web.sanecta.infrastructure.dto.UserResponse;
import com.web.sanecta.infrastructure.presentation.mapper.LoginUserMapper;
import com.web.sanecta.infrastructure.presentation.mapper.LoginUserResponseMapper;
import com.web.sanecta.infrastructure.presentation.mapper.RegisterUserMapper;
import com.web.sanecta.infrastructure.presentation.mapper.UserResponseMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
@Tag(name = "Authentication", description = "Endpoints for registration and login")
public class AuthenticationController {

    private final RegisterUserMapper registerUserMapper;
    private final RegisterUserUseCase registerUserUseCase;
    private final UserResponseMapper userResponseMapper;
    private final LoginUserUseCase loginUserUseCase;
    private final LoginUserMapper loginUserMapper;
    private final LoginUserResponseMapper loginUserResponseMapper;

    public AuthenticationController(RegisterUserMapper registerUserMapper,
                                    RegisterUserUseCase registerUserUseCase,
                                    UserResponseMapper userResponseMapper,
                                    LoginUserUseCase loginUserUseCase,
                                    LoginUserMapper loginUserMapper,
                                    LoginUserResponseMapper loginUserResponseMapper) {

        this.registerUserUseCase = registerUserUseCase;
        this.userResponseMapper = userResponseMapper;
        this.registerUserMapper = registerUserMapper;
        this.loginUserUseCase = loginUserUseCase;
        this.loginUserMapper = loginUserMapper;
        this.loginUserResponseMapper = loginUserResponseMapper;
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Returns a JWT token for a valid email and password.")
    public ResponseEntity<LoginUserResponse> login(@Valid @RequestBody LoginUserRequest data) {
        var loginResult = loginUserUseCase.execute(loginUserMapper.toCommand(data));
        return ResponseEntity.ok(loginUserResponseMapper.toDto(loginResult));
    }

    @PostMapping("/register")
    @Operation(summary = "Register user", description = "Creates a new user account.")
    public ResponseEntity<UserResponse> register(@RequestBody @Valid RegisterUserRequest data) {
        var created = registerUserUseCase.execute(registerUserMapper.toCommand(data));
        return ResponseEntity.status(201).body(userResponseMapper.toDto(created));
    }
}
