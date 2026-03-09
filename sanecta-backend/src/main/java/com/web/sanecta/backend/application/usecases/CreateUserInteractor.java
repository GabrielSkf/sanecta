package com.web.sanecta.backend.application.usecases;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.application.interfaces.CreateUserInterface;
import com.web.sanecta.backend.domain.entity.User;

public class CreateUserInteractor implements CreateUserInterface {
    private UserGateway userGateway;

    public CreateUserInteractor(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public User createUser(User user) {
        return userGateway.createUser(user);
    }
}
