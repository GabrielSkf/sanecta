package com.web.sanecta.backend.infrastructure.persistence;


import com.web.sanecta.backend.domain.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, Long> {
}
