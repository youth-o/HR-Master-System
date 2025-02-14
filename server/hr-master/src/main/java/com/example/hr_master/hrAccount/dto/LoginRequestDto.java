package com.example.hr_master.hrAccount.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequestDto {
    private Long employeeId;
    private String password;
}
