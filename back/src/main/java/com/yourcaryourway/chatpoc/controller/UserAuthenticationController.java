package com.yourcaryourway.chatpoc.controller;

import com.yourcaryourway.chatpoc.common.DTO.apiRequest.LoginRequest;
import com.yourcaryourway.chatpoc.common.DTO.apiRequest.RegisterRequestDTO;
import com.yourcaryourway.chatpoc.common.DTO.apiResponse.ApiTokenResponse;
import com.yourcaryourway.chatpoc.common.DTO.apiResponse.UserResponseDTO;
import com.yourcaryourway.chatpoc.configuration.security.JwtService;
import com.yourcaryourway.chatpoc.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserAuthenticationController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    public UserAuthenticationController(UserService userService, AuthenticationManager authenticationManager, JwtService jwtService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @GetMapping("user")
    @Tag(name = "User")
    public ResponseEntity<UserResponseDTO> getUser() {
        UserResponseDTO user = userService.getUserDTOByAuthentication();
        return ResponseEntity.ok(user);
    }

    @PostMapping("user/register")
    @Tag(name = "User")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequestDTO registerRequestDTO) {
        userService.register(registerRequestDTO);
        return ResponseEntity.ok("User correctly saved !");
    }

    @PostMapping("user/login")
    @Tag(name = "User")
    public ResponseEntity<ApiTokenResponse> login(@Valid @RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        String token = jwtService.generateToken(authentication);
        jwtService.getCookieFromToken(token, response);

        return ResponseEntity.ok(new ApiTokenResponse(token));
    }

}
