package com.web.sanecta.core.entities;

import com.web.sanecta.core.enums.UserRole;

import java.time.LocalDateTime;

public record User(
        Long id,
        String username,
        String email,
        UserRole role,
        String password,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
