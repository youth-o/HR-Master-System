// 사내 경력 관리
package com.example.hr_master.companyCareer.entity;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.enumList.ChangeType;
import com.example.hr_master.enumList.Department;
import com.example.hr_master.enumList.Position;
import com.example.hr_master.enumList.WorkLocation;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK: AUTO-INCREMENT
    private Integer historyId;

    @ManyToOne  //다대일 관계 : Many Careers -> One Employee
    @JoinColumn(name = "employee_id", referencedColumnName = "employeeId")
//                foreignKey = @ForeignKey(name = "fk_company_career_employee"))
    private Employee employee;

    @Column(nullable = false)
    private LocalDateTime changeDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ChangeType changeType;

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
    private Position position;

    @Column(nullable = false)
    private LocalDate startDate;

    private LocalDate endDate;

    private String notes;
}
