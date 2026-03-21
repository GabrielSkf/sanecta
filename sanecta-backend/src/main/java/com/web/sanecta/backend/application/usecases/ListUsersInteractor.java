package com.web.sanecta.backend.application.usecases;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.application.interfaces.ListUsersInterface;
import com.web.sanecta.backend.domain.entity.User;
import java.util.List;

public class ListUsersInteractor implements ListUsersInterface {
    private UserGateway userGateway;

    public ListUsersInteractor(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public List<User> listUsers() {
        return userGateway.getUsers();
    }
}