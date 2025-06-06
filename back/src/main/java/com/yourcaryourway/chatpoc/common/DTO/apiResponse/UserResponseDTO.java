package com.yourcaryourway.chatpoc.common.DTO.apiResponse;

import com.yourcaryourway.chatpoc.common.Role;
import lombok.Data;

@Data
public class UserResponseDTO {

    private Long id;

    private String firstName;

    private String lastName;

    private Role role;

    private String email;
}
