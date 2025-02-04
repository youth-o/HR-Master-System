package com.example.hr_master.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;


import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "HR_ACCOUNT")

public class HR_ACCOUNT {
    @Id
    private Long employeeId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Column(nullable = false, length = 30)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserAuthority userAuthority = UserAuthority.사용자;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;
}
enum UserAuthority { 사용자, 관리자 }