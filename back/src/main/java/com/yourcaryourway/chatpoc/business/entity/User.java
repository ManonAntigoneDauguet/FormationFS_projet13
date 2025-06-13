package com.yourcaryourway.chatpoc.business.entity;

import com.yourcaryourway.chatpoc.common.Role;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String email;

    @Column(name = "hash_password")
    private String password;
}
