package com.web.sanecta.core.validation;

import com.web.sanecta.core.exceptions.BusinessValidationException;

import java.util.regex.Pattern;

public final class UserValidation {

    private static final int USERNAME_MAX_LENGTH = 80;
    private static final int EMAIL_MAX_LENGTH = 80;
    private static final Pattern EMAIL_PATTERN =
            Pattern.compile("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

    private UserValidation() {
    }

    public static void validateLogin(String email, String password) {
        validateEmailRequired(email);
        validatePasswordRequired(password);
    }

    public static void validateRegistration(String username, String email, String password) {
        validateUsernameRequired(username);
        validateEmailRequired(email);
        validatePasswordRequired(password);
    }

    public static void validateUpdate(String username, String email) {
        if (username == null && email == null) {
            throw new BusinessValidationException("At least one field must be provided for update");
        }

        if (username != null) {
            validateUsernameRequired(username);
        }

        if (email != null) {
            validateEmailRequired(email);
        }
    }

    private static void validateUsernameRequired(String username) {
        if (isBlank(username)) {
            throw new BusinessValidationException("Username is required");
        }

        if (username.length() > USERNAME_MAX_LENGTH) {
            throw new BusinessValidationException("Username must have at most 80 characters");
        }
    }

    private static void validateEmailRequired(String email) {
        if (isBlank(email)) {
            throw new BusinessValidationException("Email is required");
        }

        if (email.length() > EMAIL_MAX_LENGTH) {
            throw new BusinessValidationException("Email must have at most 80 characters");
        }

        if (!EMAIL_PATTERN.matcher(email).matches()) {
            throw new BusinessValidationException("Email is invalid");
        }
    }

    private static void validatePasswordRequired(String password) {
        if (isBlank(password)) {
            throw new BusinessValidationException("Password is required");
        }
    }

    private static boolean isBlank(String value) {
        return value == null || value.isBlank();
    }
}
