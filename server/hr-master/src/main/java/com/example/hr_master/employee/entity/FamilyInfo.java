package com.example.hr_master.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "FAMILY_INFO")
public class FamilyInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long familyId;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(nullable = false, length = 10)
    private String familyName;

    @Column(nullable = false)
    private LocalDate birthDate;

    @Column(nullable = false, length = 13)
    private String contact;

    @Column(nullable = false, length = 10)
    private String relationship;
}

