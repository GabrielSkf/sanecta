package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.RegisterUserCommand;
import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.enums.UserRole;
import com.web.sanecta.core.exceptions.ConflictException;
import com.web.sanecta.core.gateways.PasswordEncoderGateway;
import com.web.sanecta.core.gateways.TimeGateway;
import com.web.sanecta.core.gateways.UserGateway;
import com.web.sanecta.core.results.UserResult;
import com.web.sanecta.core.validation.UserValidation;

public class RegisterUserUseCaseImpl implements RegisterUserUseCase {

    private final UserGateway userGateway;
    private final PasswordEncoderGateway passwordEncoderGateway;
    private final TimeGateway timeGateway;

    public RegisterUserUseCaseImpl(UserGateway userGateway,
                                   PasswordEncoderGateway passwordEncoderGateway,
                                   TimeGateway timeGateway) {
        this.userGateway = userGateway;
        this.passwordEncoderGateway = passwordEncoderGateway;
        this.timeGateway = timeGateway;
    }

    @Override
    public UserResult execute(RegisterUserCommand command) {
        UserValidation.validateRegistration(command.username(), command.email(), command.password());

        if (userGateway.existsUserByEmail(command.email(), null)) {
            throw new ConflictException("Email already exists");
        }
        String encodedPassword = passwordEncoderGateway.encode(command.password());
        var now = timeGateway.now();

        User user = new User(
                null,
                command.username(),
                command.email(),
                UserRole.USER,
                encodedPassword,
                now,
                now
        );
        return UserResult.from(userGateway.save(user));
    }
}
