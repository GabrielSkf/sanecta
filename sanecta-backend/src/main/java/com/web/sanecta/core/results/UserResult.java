package com.web.sanecta.core.results;

import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.enums.UserRole;

import java.time.LocalDateTime;

public record UserResult(
        Long id,
        String username,
        String email,
        UserRole role,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
    public static UserResult from(User user) {
        return new UserResult(
                user.id(),
                user.username(),
                user.email(),
                user.role(),
                user.createdAt(),
                user.updatedAt()
        );
    }
}
