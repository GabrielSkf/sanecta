package com.web.sanecta.core.gateways;

import com.web.sanecta.core.entities.User;

public interface UserGateway {
    User save(User user);
    User findUserById(Long id);
    User findUserByEmail(String email);
    boolean existsUserByEmail(String email, Long ignoreUserId);
    void deleteUser(Long id);
}
