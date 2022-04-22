package com.app.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAccount {
    private int id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String password;
    private Date dateOfBirth;
    private Date registered;
    private Date lastLoggedIn;
    private String role;
}
