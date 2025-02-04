package com.example.hr_master.management.entity;

import com.example.hr_master.employee.entity.Employee;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "GOAL_EVALUATION")
public class GoalEvaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "evaluation_id", nullable = false, updatable = false)
    private Long evaluationId;

    // Employee와 다대일 연관관계 (평가는 한 사원에 속함)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "evaluation_date", nullable = false)
    private LocalDate evaluationDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "evaluation_type", nullable = false)
    private EvaluationType evaluationType;

    // 평가 점수 (1~5)
    @Column(name = "score", nullable = false, columnDefinition = "TINYINT CHECK (score BETWEEN 1 AND 5)")
    private Integer score;

    @Column(name = "kpi", nullable = false, precision = 5, scale = 2)
    private BigDecimal kpi;
}
enum EvaluationType { 연봉평가, 성과평가, 프로젝트평가 }
