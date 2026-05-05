package com.web.sanecta.infrastructure.services;

import com.web.sanecta.core.entities.User;
import com.web.sanecta.core.enums.UserRole;
import com.web.sanecta.core.gateways.UserGateway;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpringSecurityAuthService implements UserDetailsService {

    private final UserGateway userGateway;

    public SpringSecurityAuthService(UserGateway userGateway) {
        this.userGateway = userGateway;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userGateway.findUserByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found: " + email);
        }

        return org.springframework.security.core.userdetails.User
                .withUsername(user.username())
                .password(user.password())
                .authorities(toAuthorities(user.role()))
                .build();
    }

    private List<GrantedAuthority> toAuthorities(UserRole role) {
        if (role == UserRole.ADMIN) {
            return List.of(
                    new SimpleGrantedAuthority("ROLE_ADMIN"),
                    new SimpleGrantedAuthority("ROLE_USER")
            );
        }

        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }
}
