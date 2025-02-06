package com.example.hr_master.pay.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "PAY_COMMON")
public class PayCommon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pay_code", nullable = false, updatable = false)
    private Long payCode;

    // 적용 직급 (Employee의 Position Enum 재사용)
    @Enumerated(EnumType.STRING)
    @Column(name = "position", nullable = false)
    private Position position;

    @Column(name = "base_salary", nullable = false, precision = 15, scale = 2)
    private BigDecimal baseSalary;

    @Column(name = "tax_rate", nullable = false, precision = 6, scale = 3)
    private BigDecimal taxRate;

    @Column(name = "insurance_rate", nullable = false, precision = 6, scale = 3)
    private BigDecimal insuranceRate;

    @Column(name = "bonus_rate", nullable = false, precision = 6, scale = 3)
    private BigDecimal bonusRate;

    @Column(name = "effective_date", nullable = false)
    private LocalDateTime effectiveDate = LocalDateTime.now();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
enum Position { 인턴, 사원, 주임, 대리, 과장, 차장, 부장, 이사, 사장 }