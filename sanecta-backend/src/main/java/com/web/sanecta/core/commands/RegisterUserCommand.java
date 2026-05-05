package com.web.sanecta.core.commands;

public record RegisterUserCommand(
        String username,
        String email,
        String password
) {
}
