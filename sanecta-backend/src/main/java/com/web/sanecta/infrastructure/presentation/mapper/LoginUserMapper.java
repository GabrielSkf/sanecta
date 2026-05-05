package com.web.sanecta.infrastructure.presentation.mapper;

import com.web.sanecta.core.commands.LoginUserCommand;
import com.web.sanecta.infrastructure.dto.LoginUserRequest;
import org.springframework.stereotype.Component;

@Component
public class LoginUserMapper {

    public LoginUserCommand toCommand(LoginUserRequest request) {
        return new LoginUserCommand(
                request.email(),
                request.password()
        );
    }
}
