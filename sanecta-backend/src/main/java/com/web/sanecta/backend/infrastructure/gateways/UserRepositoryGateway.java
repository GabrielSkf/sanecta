package com.web.sanecta.backend.infrastructure.gateways;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.domain.entity.User;
import com.web.sanecta.backend.infrastructure.persistence.UserEntity;
import com.web.sanecta.backend.infrastructure.persistence.UserRepository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class UserRepositoryGateway implements UserGateway {

    private final UserRepository userRepository;
    private final UserEntityMapper userEntityMapper;

    public UserRepositoryGateway(UserRepository userRepository, UserEntityMapper userEntityMapper) {
        this.userRepository = userRepository;
        this.userEntityMapper = userEntityMapper;
    }

    @Override
    public User createUser(User userDomainObject) {
        UserEntity userEntity = userEntityMapper.toEntity(userDomainObject);
        UserEntity savedEntity = userRepository.save(userEntity);
        return userEntityMapper.toDomainObject(savedEntity);
    }

    @Override
    public List<User> getUsers() {
        Iterable<UserEntity> entities = userRepository.findAll();
        return StreamSupport.stream(entities.spliterator(), false)
                .map(userEntityMapper::toDomainObject)
                .collect(Collectors.toList());
    }

    @Override
    public User getUserByEmail(String email) {
        UserEntity userEntity = userRepository.findByEmail(email);
        if (userEntity == null) {
            return null;
        }
        return userEntityMapper.toDomainObject(userEntity);
    }
}
