package com.example.hr_master.employee.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import com.example.hr_master.companyCareer.entity.CompanyCareer;
import java.util.List;
import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "EMPLOYEE")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @Column(nullable = false, length = 10)
    private String empName;

    @Column(nullable = false, length = 30)
    private String empEngName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column(nullable = false, length = 13)
    private String ssn;

    @Column(nullable = false, length = 15)
    private String nationality;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MilitaryService militaryService = MilitaryService.해당없음;

    @Column(nullable = false, length = 13)
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private HireType hireType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private WorkLocation workLocation;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Department department;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Position position = Position.사원;

    @Column(nullable = false, length = 50)
    private String address;

    @Column(nullable = false, length = 30)
    private String detailAddress;

    @Column(nullable = false, length = 30)
    private String companyEmail;

    @Column(nullable = false, length = 13)
    private String companyPhone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RetireCls retireCls = RetireCls.재직;

    @Column(nullable = false)
    private LocalDate hireDate;

    private LocalDate retireDate;

//    @OneToOne(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
//    private HrAccount hrAccount;
//
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CompanyCareer> companyCareers = new ArrayList<>();
//
//    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<ExternalCareer> externalCareers;
}

// ENUM 정의
enum Gender { 남, 여 }
enum MilitaryService { 해당없음, 군필, 미필 }
enum HireType { 인턴, 신입, 경력 }
enum WorkLocation { 서한ENP, 기획본부, 서한이노빌리티, 한국무브넥스, 캄텍 }
enum Department { 인사, IT기획, ESG, 품질, 공정기술, 안전, 생산관리, 영업, 협력업체관리 }
enum Position { 인턴, 사원, 주임, 대리, 과장, 차장, 부장, 이사, 사장 }
enum RetireCls { 재직, 퇴직 }