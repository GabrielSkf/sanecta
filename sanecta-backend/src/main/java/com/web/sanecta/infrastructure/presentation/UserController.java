package com.web.sanecta.infrastructure.presentation;

import com.web.sanecta.core.usecases.DeleteUserUseCase;
import com.web.sanecta.core.usecases.FindUserByIdUseCase;
import com.web.sanecta.core.usecases.UpdateUserUseCase;
import com.web.sanecta.infrastructure.dto.UserResponse;
import com.web.sanecta.infrastructure.dto.UserUpdateRequest;
import com.web.sanecta.infrastructure.presentation.mapper.UserResponseMapper;
import com.web.sanecta.infrastructure.presentation.mapper.UserUpdateRequestMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
@Tag(name = "Users", description = "Protected endpoints for user management")
@SecurityRequirement(name = "bearerAuth")
public class UserController {
    private final DeleteUserUseCase deleteUserUseCase;
    private final FindUserByIdUseCase findUserByIdUseCase;
    private final UpdateUserUseCase updateUserUseCase;
    private final UserResponseMapper userResponseMapper;
    private final UserUpdateRequestMapper userUpdateRequestMapper;

    public UserController(DeleteUserUseCase deleteUserUseCase,
                          FindUserByIdUseCase findUserByIdUseCase,
                          UpdateUserUseCase updateUserUseCase,
                          UserResponseMapper userResponseMapper,
                          UserUpdateRequestMapper userUpdateRequestMapper) {
        this.deleteUserUseCase = deleteUserUseCase;
        this.findUserByIdUseCase = findUserByIdUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.userResponseMapper = userResponseMapper;
        this.userUpdateRequestMapper = userUpdateRequestMapper;
    }

    @GetMapping("/{id}")
    @Operation(summary = "Find user by id")
    public ResponseEntity<UserResponse> findUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userResponseMapper.toDto(findUserByIdUseCase.execute(id)));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update user")
    public ResponseEntity<UserResponse> updateUser(@PathVariable Long id,
                                                   @Valid @RequestBody UserUpdateRequest request) {
        return ResponseEntity.ok(
                userResponseMapper.toDto(updateUserUseCase.execute(userUpdateRequestMapper.toCommand(id, request)))
        );
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete user", description = "Requires the ADMIN role.")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        deleteUserUseCase.execute(id);
        return ResponseEntity.noContent().build();
    }
}
