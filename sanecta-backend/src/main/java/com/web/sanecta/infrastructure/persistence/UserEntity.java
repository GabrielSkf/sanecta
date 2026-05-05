package com.web.sanecta.infrastructure.persistence;

import com.web.sanecta.core.enums.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "tb_users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    @Column(nullable = false, length = 80)
    private String username;

    @Getter
    @Setter
    @Column(nullable = false, length = 80)
    private String email;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    @Getter
    @Setter
    @Column(nullable = false, length = 80)
    private String password;

    @Getter
    @Setter
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Getter
    @Setter
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
