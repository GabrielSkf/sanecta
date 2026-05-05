package com.web.sanecta.infrastructure.gateway;

import com.web.sanecta.core.commands.LoginUserCommand;
import com.web.sanecta.core.gateways.AuthenticationManagerGateway;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;

@Component
public class LoginAuthenticationManagerGateway implements AuthenticationManagerGateway {

    private final AuthenticationManager authenticationManager;

    public LoginAuthenticationManagerGateway(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public void authenticate(LoginUserCommand command) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(
                command.email(),
                command.password());
        authenticationManager.authenticate(usernamePassword);
    }
}
