package com.example.hr_master.companyCareer.entity;

import com.example.hr_master.employee.entity.Employee;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "COMPANY_CAREER")
public class CompanyCareer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    @JsonBackReference  // 🔹 JSON에서 employee 필드는 직렬화되지 않음
    private Employee employee;

    @Column(nullable = false)
    private LocalDateTime changeDate;

    @Column(nullable = false, length = 20)
    private String changeType;

    @Column(nullable = false, length = 20)
    private String division;

    @Column(nullable = false, length = 20)
    private String department;

    @Column(nullable = false, length = 10)
    private String position;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column(columnDefinition = "TEXT")
    private String notes;
}
