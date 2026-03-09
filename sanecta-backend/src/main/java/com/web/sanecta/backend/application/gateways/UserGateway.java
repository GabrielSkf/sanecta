package com.web.sanecta.backend.application.gateways;

import com.web.sanecta.backend.domain.entity.User;

public interface UserGateway {
    User createUser(User user);
}
