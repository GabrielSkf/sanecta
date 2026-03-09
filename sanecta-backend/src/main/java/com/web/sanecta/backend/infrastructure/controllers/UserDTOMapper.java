package com.web.sanecta.backend.infrastructure.controllers;

import com.web.sanecta.backend.domain.entity.User;

public class UserDTOMapper {
    CreateUserResponse toResponse(User userDomainObject) {
        return new CreateUserResponse(userDomainObject.username(), userDomainObject.email());
    }

    public User toUser(CreateUserRequest request){
        return new User(request.username(), request.password(),  request.email());
    }
}
