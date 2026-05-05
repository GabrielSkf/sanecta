package com.web.sanecta.infrastructure.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserUpdateRequest(
        @Size(max = 80) String username,
        @Email @Size(max = 80) String email
) {
}
