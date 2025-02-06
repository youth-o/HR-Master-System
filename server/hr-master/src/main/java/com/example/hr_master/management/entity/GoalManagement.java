package com.example.hr_master.management.entity;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.enumList.GoalStatus;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "GOAL_MANAGEMENT")
public class GoalManagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goal_id", nullable = false, updatable = false)
    private Long goalId;

    // Employee와 다대일 연관관계 (목표는 한 사원에 속함)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(name = "goal_title", nullable = false, length = 30)
    private String goalTitle;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private GoalStatus status;

    // 목표 진행률 (0~100)
    @Column(name = "progress", nullable = false, columnDefinition = "TINYINT CHECK (progress BETWEEN 0 AND 100)")
    private Integer progress;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}