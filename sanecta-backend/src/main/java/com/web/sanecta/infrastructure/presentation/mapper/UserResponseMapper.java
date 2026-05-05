package com.web.sanecta.infrastructure.presentation.mapper;

import com.web.sanecta.core.enums.UserRole;
import com.web.sanecta.core.results.UserResult;
import com.web.sanecta.infrastructure.dto.UserResponse;
import com.web.sanecta.infrastructure.dto.UserRoleResponse;
import org.springframework.stereotype.Component;

@Component
public class UserResponseMapper {

    public UserResponse toDto(UserResult userResult) {
        return new UserResponse(
                userResult.id(),
                userResult.username(),
                userResult.email(),
                mapRole(userResult.role()),
                userResult.createdAt(),
                userResult.updatedAt()
        );
    }

    private UserRoleResponse mapRole(UserRole role) {
        return switch (role) {
            case ADMIN -> UserRoleResponse.ADMIN;
            case USER -> UserRoleResponse.USER;
        };
    }
}
