package com.yourcaryourway.chatpoc.business.mapper;

import com.yourcaryourway.chatpoc.business.entity.User;
import com.yourcaryourway.chatpoc.common.DTO.apiRequest.RegisterRequestDTO;
import com.yourcaryourway.chatpoc.common.DTO.apiResponse.ShortUserResponseDTO;
import com.yourcaryourway.chatpoc.common.DTO.apiResponse.UserResponseDTO;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    /**
     * Converts a UserDTO object to a User object
     *
     * @param registerRequestDTO as the UserDTO to convert
     * @return User
     */
    public User convertToEntity(RegisterRequestDTO registerRequestDTO) {
        User user = new User();
        user.setFirstName(registerRequestDTO.getFirstName());
        user.setLastName(registerRequestDTO.getLastName());
        user.setEmail(registerRequestDTO.getEmail());

        return user;
    }

    /**
     * Converts a User object to a UserResponseDTO object
     *
     * @param user as the User to convert
     * @return UserResponseDTO
     */
    public UserResponseDTO convertToResponseDTO(User user) {
        UserResponseDTO responseDTO = new UserResponseDTO();
        responseDTO.setId(user.getId());
        responseDTO.setFirstName(user.getFirstName());
        responseDTO.setLastName(user.getLastName());
        responseDTO.setRole(user.getRole());
        responseDTO.setEmail(user.getEmail());

        return responseDTO;
    }

    /**
     * Converts a User entity to a version with only username and id
     *
     * @param user as the User to convert
     * @return ShortUserResponseDTO
     */
    public ShortUserResponseDTO convertToShortResponseDTO(User user) {
        ShortUserResponseDTO responseDTO = new ShortUserResponseDTO();
        responseDTO.setId(user.getId());
        responseDTO.setFirstName(user.getFirstName());
        responseDTO.setLastName(user.getLastName());

        return responseDTO;
    }
}
