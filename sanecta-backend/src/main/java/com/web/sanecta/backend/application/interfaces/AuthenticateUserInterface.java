package com.web.sanecta.backend.application.interfaces;

import com.web.sanecta.backend.domain.entity.User;

public interface AuthenticateUserInterface {
    public User authenticate(String email, String password);
}
