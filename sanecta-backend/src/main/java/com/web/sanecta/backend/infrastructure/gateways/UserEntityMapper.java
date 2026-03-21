package com.web.sanecta.backend.infrastructure.gateways;

import com.web.sanecta.backend.domain.entity.User;
import com.web.sanecta.backend.infrastructure.persistence.UserEntity;

public class UserEntityMapper {
    UserEntity toEntity(User userDomainObject){
        return new UserEntity(userDomainObject.username(),
                userDomainObject.email(), userDomainObject.password());
    }

    User toDomainObject(UserEntity userEntity){
        return new User(userEntity.getUsername(), userEntity.getEmail(), userEntity.getPassword());
    }
}
