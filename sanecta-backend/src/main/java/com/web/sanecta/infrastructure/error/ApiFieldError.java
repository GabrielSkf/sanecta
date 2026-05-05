package com.web.sanecta.infrastructure.error;

public record ApiFieldError(
        String field,
        String message
) {
}
