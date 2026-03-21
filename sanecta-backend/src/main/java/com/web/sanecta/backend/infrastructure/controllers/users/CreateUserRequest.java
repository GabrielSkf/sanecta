package com.web.sanecta.backend.infrastructure.controllers.users;

public record CreateUserRequest(String username, String email, String password) {
}
