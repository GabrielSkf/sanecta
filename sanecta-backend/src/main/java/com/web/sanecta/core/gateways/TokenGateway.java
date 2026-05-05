package com.web.sanecta.core.gateways;

import com.web.sanecta.core.entities.User;

public interface TokenGateway {
    String generateToken(User user);
}
