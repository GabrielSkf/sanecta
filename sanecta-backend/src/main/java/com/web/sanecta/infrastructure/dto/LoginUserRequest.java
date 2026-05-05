package com.web.sanecta.infrastructure.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginUserRequest(
        @NotBlank @Email @Size(max = 80) String email,
        @NotBlank String password
) {
}
