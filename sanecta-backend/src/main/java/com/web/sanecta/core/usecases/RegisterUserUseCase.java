package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.RegisterUserCommand;
import com.web.sanecta.core.results.UserResult;

public interface RegisterUserUseCase {
    UserResult execute(RegisterUserCommand command);
}
