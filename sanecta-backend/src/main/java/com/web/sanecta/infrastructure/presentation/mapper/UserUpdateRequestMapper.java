package com.web.sanecta.infrastructure.presentation.mapper;

import com.web.sanecta.core.commands.UpdateUserCommand;
import com.web.sanecta.infrastructure.dto.UserUpdateRequest;
import org.springframework.stereotype.Component;

@Component
public class UserUpdateRequestMapper {

    public UpdateUserCommand toCommand(Long id, UserUpdateRequest request) {
        return new UpdateUserCommand(
                id,
                request.username(),
                request.email()
        );
    }
}
