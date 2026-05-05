package com.web.sanecta.infrastructure.gateway;

import com.web.sanecta.core.gateways.TimeGateway;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class SystemTimeGateway implements TimeGateway {

    @Override
    public LocalDateTime now() {
        return LocalDateTime.now();
    }
}
