package com.web.sanecta.infrastructure.dto;

public record LoginUserResponse(
        Long id,
        String username,
        String token
) {
}
