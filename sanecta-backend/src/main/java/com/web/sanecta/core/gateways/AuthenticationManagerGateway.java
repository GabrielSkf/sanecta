package com.web.sanecta.core.gateways;

import com.web.sanecta.core.commands.LoginUserCommand;

public interface AuthenticationManagerGateway {
    void authenticate(LoginUserCommand command);
}
