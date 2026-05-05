package com.web.sanecta.infrastructure.configuration.beans;

import com.web.sanecta.core.gateways.*;
import com.web.sanecta.core.usecases.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public DeleteUserUseCase deleteUserUseCase(UserGateway userGateway) {
        return new DeleteUserUseCaseImpl(userGateway);
    }

    @Bean
    public FindUserByIdUseCase findUserByIdUseCase(UserGateway userGateway) {
        return new FindUserByIdUseCaseImpl(userGateway);
    }

    @Bean
    public UpdateUserUseCase updateUserUseCase(UserGateway userGateway, TimeGateway timeGateway) {
        return new UpdateUserUseCaseImpl(userGateway, timeGateway);
    }

    @Bean
    public RegisterUserUseCase registerUserUseCase(
            UserGateway userGateway,
            PasswordEncoderGateway passwordEncoderGateway,
            TimeGateway timeGateway
    ) {
        return new RegisterUserUseCaseImpl(userGateway, passwordEncoderGateway, timeGateway);
    }

    @Bean
    public LoginUserUseCase loginUserUseCase(
            UserGateway userGateway,
            AuthenticationManagerGateway authenticationManagerGateway,
            TokenGateway tokenGateway) {
        return new LoginUserUseCaseImpl(userGateway, authenticationManagerGateway, tokenGateway);
    }
}
