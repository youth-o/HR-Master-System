package com.example.hr_master.pay;

import com.example.hr_master.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PAYMENT")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id", nullable = false, updatable = false)
    private Long paymentId;

    // 사원과의 연관관계 (Employee 엔티티)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "payment_date", nullable = false)
    private LocalDateTime paymentDate = LocalDateTime.now();

    // PAY_COMMON과의 연관관계 (nullable 처리)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pay_code", nullable = true)
    private PayCommon payCommon;

    @Column(name = "base_salary", nullable = false, precision = 10, scale = 2)
    private BigDecimal baseSalary;

    @Column(name = "overtime_pay", nullable = false, precision = 10, scale = 2)
    private BigDecimal overtimePay;

    @Column(name = "bonus", nullable = false, precision = 10, scale = 2)
    private BigDecimal bonus;

    @Column(name = "tax", nullable = false, precision = 10, scale = 2)
    private BigDecimal tax;

    @Column(name = "insurance", nullable = false, precision = 10, scale = 2)
    private BigDecimal insurance;

    @Column(name = "total_salary", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalSalary;
}