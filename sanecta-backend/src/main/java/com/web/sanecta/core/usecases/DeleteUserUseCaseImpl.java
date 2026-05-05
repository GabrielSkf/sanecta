package com.web.sanecta.core.usecases;

import com.web.sanecta.core.exceptions.UserNotFoundException;
import com.web.sanecta.core.gateways.UserGateway;

public class DeleteUserUseCaseImpl implements DeleteUserUseCase {

    private final UserGateway userGateway;

    public DeleteUserUseCaseImpl(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public void execute(Long id) {
        var user = userGateway.findUserById(id);
        if (user == null) {
            throw new UserNotFoundException(id);
        }
        userGateway.deleteUser(id);
    }
}
