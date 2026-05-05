package com.web.sanecta.core.usecases;

import com.web.sanecta.core.results.UserResult;

public interface FindUserByIdUseCase {
    UserResult execute(Long id);
}
