package com.web.sanecta.infrastructure.persistence.mapper;

import com.web.sanecta.core.entities.User;
import com.web.sanecta.infrastructure.persistence.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserEntityMapper {

    public UserEntity toEntity(final User user) {
        return UserEntity.builder()
                .id(user.id())
                .username(user.username())
                .email(user.email())
                .role(user.role())
                .password(user.password())
                .createdAt(user.createdAt())
                .updatedAt(user.updatedAt())
                .build();
    }

    public User toDomain(final UserEntity userEntity) {
        return new User(
                userEntity.getId(),
                userEntity.getUsername(),
                userEntity.getEmail(),
                userEntity.getRole(),
                userEntity.getPassword(),
                userEntity.getCreatedAt(),
                userEntity.getUpdatedAt()
        );
    }
}
