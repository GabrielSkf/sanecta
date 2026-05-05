package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.LoginUserCommand;
import com.web.sanecta.core.results.LoginUserResult;

public interface LoginUserUseCase {
    LoginUserResult execute(LoginUserCommand command);
}
