package com.web.sanecta.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.application.usecases.CreateUserInteractor;
import com.web.sanecta.backend.infrastructure.controllers.UserDTOMapper;
import com.web.sanecta.backend.infrastructure.gateways.UserEntityMapper;
import com.web.sanecta.backend.infrastructure.gateways.UserRepositoryGateway;
import com.web.sanecta.backend.infrastructure.persistence.UserRepository;

@Configuration
public class UserConfig {
    @Bean
    CreateUserInteractor createUserCase(UserGateway userGateway) {
        return new CreateUserInteractor(userGateway);
    }

    @Bean
    UserGateway userGateway(UserRepository userRepository, UserEntityMapper userEntityMapper) {
        return new UserRepositoryGateway(userRepository, userEntityMapper);
    }

    @Bean
    UserEntityMapper userEntityMapper() {
        return new UserEntityMapper();
    }

    @Bean
    UserDTOMapper userDTOMapper() {
        return new UserDTOMapper();
    }
}