package com.example.hr_master.management.entity;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.enumList.LeaveType;
import com.example.hr_master.enumList.ApprovalStatus;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "LEAVE_MANAGEMENT")
public class LeaveManagement {

    // 연차 ID (Primary Key, Auto Increment)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id", nullable = false, updatable = false)
    private Long applicationId;

    // 사원 ID (EMPLOYEE 테이블과 연관관계)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    // 연차 신청일
    @Column(name = "application_date", nullable = false)
    private LocalDate applicationDate;

    // 신청 기간 (예: "시작일~종료일")
    @Column(name = "period", nullable = false)
    private String period;

    // 신청 일수
    @Column(name = "days_applied", nullable = false, precision = 10, scale = 2)
    private BigDecimal daysApplied;

    @Enumerated(EnumType.STRING)
    @Column(name = "leave_type", nullable = false)
    private LeaveType leaveType;

    @Enumerated(EnumType.STRING)
    @Column(name = "approval_status", nullable = false)
    private ApprovalStatus approvalStatus;

    // 비고 (개인 사유 등) - TEXT 타입
    @Lob
    @Column(name = "notes")
    private String notes;
}
