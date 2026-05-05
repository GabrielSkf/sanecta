package com.web.sanecta.core.usecases;

import com.web.sanecta.core.commands.UpdateUserCommand;
import com.web.sanecta.core.results.UserResult;

public interface UpdateUserUseCase {
    UserResult execute(UpdateUserCommand command);
}
