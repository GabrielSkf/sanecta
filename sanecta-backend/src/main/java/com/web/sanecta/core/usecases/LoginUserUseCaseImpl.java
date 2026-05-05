package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.LoginUserCommand;
import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.exceptions.UserNotFoundException;
import com.web.sanecta.core.gateways.AuthenticationManagerGateway;
import com.web.sanecta.core.gateways.TokenGateway;
import com.web.sanecta.core.gateways.UserGateway;
import com.web.sanecta.core.results.LoginUserResult;
import com.web.sanecta.core.validation.UserValidation;

public class LoginUserUseCaseImpl implements LoginUserUseCase {

    private final UserGateway userGateway;
    private final AuthenticationManagerGateway authenticationManagerGateway;
    private final TokenGateway tokenGateway;

    public LoginUserUseCaseImpl(
            UserGateway userGateway,
            AuthenticationManagerGateway authenticationManagerGateway,
            TokenGateway tokenGateway
    ) {
        this.userGateway = userGateway;
        this.authenticationManagerGateway = authenticationManagerGateway;
        this.tokenGateway = tokenGateway;
    }

    @Override
    public LoginUserResult execute(LoginUserCommand command) {
        UserValidation.validateLogin(command.email(), command.password());
        authenticationManagerGateway.authenticate(command);

        User user = userGateway.findUserByEmail(command.email());
        if (user == null) {
            throw new UserNotFoundException(command.email());
        }

        String token = tokenGateway.generateToken(user);
        return new LoginUserResult(user.id(), user.username(), token);
    }
}
