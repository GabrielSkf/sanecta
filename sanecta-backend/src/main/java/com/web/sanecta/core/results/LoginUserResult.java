package com.web.sanecta.core.results;

public record LoginUserResult(
        Long id,
        String username,
        String token
) {
}
