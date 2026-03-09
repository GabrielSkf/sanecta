package com.web.sanecta.backend.infrastructure.controllers;

public record CreateUserRequest(String username, String email, String password) {
}
