package com.web.sanecta.infrastructure.gateway;

import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.gateways.UserGateway;
import com.web.sanecta.infrastructure.persistence.UserRepository;
import com.web.sanecta.infrastructure.persistence.mapper.UserEntityMapper;
import org.springframework.stereotype.Component;

@Component
public class UserRepositoryGateway implements UserGateway {

    private final UserRepository repository;
    private final UserEntityMapper mapper;

    public UserRepositoryGateway(UserRepository repository, UserEntityMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public User save(User user) {
        return mapper.toDomain(repository.save(mapper.toEntity(user)));
    }

    @Override
    public User findUserById(Long id) {
        return repository.findById(id)
                .map(mapper::toDomain)
                .orElse(null);
    }

    @Override
    public User findUserByEmail(String email) {
        return repository.findByEmail(email)
                .map(mapper::toDomain)
                .orElse(null);
    }

    @Override
    public boolean existsUserByEmail(String email, Long ignoreUserId) {
        return repository.existsByEmail(email, ignoreUserId);
    }

    @Override
    public void deleteUser(Long id) {
        repository.deleteById(id);
    }
}
