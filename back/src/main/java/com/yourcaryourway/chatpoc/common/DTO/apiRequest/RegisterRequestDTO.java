package com.yourcaryourway.chatpoc.common.DTO.apiRequest;

import com.yourcaryourway.chatpoc.configuration.personalisedValidator.PasswordConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequestDTO {

    @NotBlank(message = "A first name is required")
    private String firstName;

    @NotBlank(message = "A last name is required")
    private String lastName;

    @NotBlank(message = "An email is required")
    @Email(message = "The email must be a correct email address")
    private String email;

    @NotBlank(message = "A password is required")
    @PasswordConstraint(message = "The password must be at least 8 characters long and contain at least 1 special character, 1 uppercase letter and 1 lowercase letter")
    private String password;
}
