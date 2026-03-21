package com.web.sanecta.backend.application.usecases;

import com.web.sanecta.backend.application.gateways.UserGateway;
import com.web.sanecta.backend.application.interfaces.AuthenticateUserInterface;
import com.web.sanecta.backend.domain.entity.User;

public class AuthenticateUserInteractor implements AuthenticateUserInterface {
    private UserGateway userGateway;

    public AuthenticateUserInteractor(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public User authenticate(String email, String password) {
        User user = userGateway.getUserByEmail(email);
        
        if (user == null) {
            throw new RuntimeException("Usuário não encontrado");
        }
        
        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Senha incorreta");
        }
        
        return user;
    }

    private String getPassword(User user) {
        try {
            return (String) user.getClass().getMethod("getPassword").invoke(user);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao acessar senha", e);
        }
    }
}
