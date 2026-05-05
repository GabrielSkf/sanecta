package com.web.sanecta.core.usecases;

import com.web.sanecta.core.exceptions.UserNotFoundException;
import com.web.sanecta.core.gateways.UserGateway;
import com.web.sanecta.core.results.UserResult;

public class FindUserByIdUseCaseImpl implements FindUserByIdUseCase {

    private final UserGateway userGateway;

    public FindUserByIdUseCaseImpl(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public UserResult execute(Long id) {
        var user = userGateway.findUserById(id);
        if (user == null) {
            throw new UserNotFoundException(id);
        }
        return UserResult.from(user);
    }
}
