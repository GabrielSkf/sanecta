package com.web.sanecta.infrastructure.gateway;

import com.web.sanecta.core.gateways.PasswordEncoderGateway;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class BcryptPasswordEncoderGateway implements PasswordEncoderGateway {

    private final PasswordEncoder passwordEncoder;

    public BcryptPasswordEncoderGateway(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String encode(String rawPassword) {
        return passwordEncoder.encode(rawPassword);
    }
}
