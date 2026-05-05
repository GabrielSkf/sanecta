package com.web.sanecta.infrastructure.presentation.mapper;

import com.web.sanecta.core.results.LoginUserResult;
import com.web.sanecta.infrastructure.dto.LoginUserResponse;
import org.springframework.stereotype.Component;

@Component
public class LoginUserResponseMapper {

    public LoginUserResponse toDto(LoginUserResult loginUserResult) {
        return new LoginUserResponse(
                loginUserResult.id(),
                loginUserResult.username(),
                loginUserResult.token()
        );
    }
}
