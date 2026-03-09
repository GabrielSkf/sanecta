package com.web.sanecta.backend.application.interfaces;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.domain.entity.User;

public interface CreateUserInterface {
    public User createUser(User user);
}
