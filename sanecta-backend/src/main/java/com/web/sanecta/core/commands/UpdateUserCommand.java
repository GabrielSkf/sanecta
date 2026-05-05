package com.web.sanecta.core.commands;

public record UpdateUserCommand(
        Long id,
        String username,
        String email
) {
}
