package com.web.sanecta.backend.application.gateways;

import com.web.sanecta.backend.domain.entity.User;

import java.util.List;

public interface UserGateway {
    User createUser(User user);
    List<User> getUsers();
    User getUserByEmail(String email);
}
