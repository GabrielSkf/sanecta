package com.web.sanecta.infrastructure.dto;

import java.time.LocalDateTime;

public record UserResponse(
        Long id,
        String username,
        String email,
        UserRoleResponse role,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
