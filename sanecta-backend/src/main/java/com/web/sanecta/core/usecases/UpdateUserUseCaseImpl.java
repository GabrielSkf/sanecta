package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.UpdateUserCommand;
import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.exceptions.ConflictException;
import com.web.sanecta.core.exceptions.UserNotFoundException;
import com.web.sanecta.core.gateways.TimeGateway;
import com.web.sanecta.core.gateways.UserGateway;
import com.web.sanecta.core.results.UserResult;
import com.web.sanecta.core.validation.UserValidation;

public class UpdateUserUseCaseImpl implements UpdateUserUseCase {

    private final UserGateway userGateway;
    private final TimeGateway timeGateway;

    public UpdateUserUseCaseImpl(UserGateway userGateway, TimeGateway timeGateway) {
        this.userGateway = userGateway;
        this.timeGateway = timeGateway;
    }

    @Override
    public UserResult execute(UpdateUserCommand command) {
        UserValidation.validateUpdate(command.username(), command.email());

        var existentUser = userGateway.findUserById(command.id());
        if (existentUser == null) {
            throw new UserNotFoundException(command.id());
        }
        String username = command.username() != null ? command.username() : existentUser.username();
        String email = command.email() != null ? command.email() : existentUser.email();
        if (userGateway.existsUserByEmail(email, existentUser.id())) {
            throw new ConflictException("Email already exists");
        }
        return UserResult.from(userGateway.save(new User(
                existentUser.id(),
                username,
                email,
                existentUser.role(),
                existentUser.password(),
                existentUser.createdAt(),
                timeGateway.now()
        )));
    }
}
