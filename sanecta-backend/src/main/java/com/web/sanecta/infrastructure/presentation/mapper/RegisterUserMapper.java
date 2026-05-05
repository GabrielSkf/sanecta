package com.web.sanecta.infrastructure.presentation.mapper;

import com.web.sanecta.core.commands.RegisterUserCommand;
import com.web.sanecta.infrastructure.dto.RegisterUserRequest;
import org.springframework.stereotype.Component;

@Component
public class RegisterUserMapper {

    public RegisterUserCommand toCommand(RegisterUserRequest request) {
        return new RegisterUserCommand(
                request.username(),
                request.email(),
                request.password()
        );
    }
}
