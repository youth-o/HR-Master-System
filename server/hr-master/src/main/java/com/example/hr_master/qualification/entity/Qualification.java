package com.example.hr_master.qualification.entity;

import com.example.hr_master.employee.entity.Employee;
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
@Table(name = "QUALIFICATION")
public class Qualification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualificationId;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(nullable = false, length = 20)
    private String licenseName;

    @Column(nullable = false)
    private LocalDate acquisitionDate;

    @Column(length = 10)
    private String score;

    @Column(nullable = false, length = 20)
    private String issuingAgency;
}
