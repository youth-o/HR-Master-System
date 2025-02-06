package com.example.hr_master.career.entity;

import com.example.hr_master.employee.entity.Employee;

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
    private Employee employee;

    @Column(nullable = false)
    private LocalDateTime changeDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ChangeType changeType = ChangeType.기타;

    @Column(nullable = false, length = 10)
    private String division;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private WorkLocation workLocation;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Department department;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Position position = Position.사원;

    @Column(nullable = false)
    private LocalDate startDate;

    private LocalDate endDate;

    @Lob
    private String notes;
}
enum ChangeType { 부서이동, 직급변경, 기타 }
enum WorkLocation { 서한ENP, 기획본부, 서한이노빌리티, 한국무브넥스, 캄텍 }
enum Department { 인사, IT기획, ESG, 품질, 공정기술, 안전, 생산관리, 영업, 협력업체관리 }
enum Position { 인턴, 사원, 주임, 대리, 과장, 차장, 부장, 이사, 사장 }
