package com.web.sanecta.core.commands;

public record LoginUserCommand (
    String email,
    String password
) { }
