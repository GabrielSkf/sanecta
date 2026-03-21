package com.web.sanecta.backend.domain.entity;

public record User(String username, String email, String password) {

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }
}
