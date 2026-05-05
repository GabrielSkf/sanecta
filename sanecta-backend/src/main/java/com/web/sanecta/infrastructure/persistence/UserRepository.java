package com.web.sanecta.infrastructure.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    @Query("""
        SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END
            FROM UserEntity u
                WHERE u.email = :email
                    AND (:ignoreId IS NULL OR u.id <> :ignoreId)
    """)
    boolean existsByEmail(@Param("email") String email,
                          @Param("ignoreId") Long ignoreId);

    Optional<UserEntity> findByEmail(String email);
}
