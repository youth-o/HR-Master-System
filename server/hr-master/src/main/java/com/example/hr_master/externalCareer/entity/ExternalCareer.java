package com.example.hr_master.externalCareer.entity;

import com.example.hr_master.employee.entity.Employee;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "EXTERNAL_CAREER")
public class ExternalCareer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long careerId;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(nullable = false, length = 30)
    private String companyName;

    @Column(nullable = false, length = 10)
    private String jobTitle;

    @Column(nullable = false, length = 10)
    private String position;

    @Column(nullable = false)
    private LocalDate hireDate;

    private LocalDate resignationDate;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal annualSalary;
}

