package com.example.hr_master.companyCareer.repository;

import com.example.hr_master.companyCareer.entity.CompanyCareer;
import org.springframework.data.jpa.repository.JpaRepository;

//CompanyCareer: 관리할 엔티티 클래스, Long: Primary Key의 데이터 타입에 따라 결정
public interface CompanyCareerRepository extends JpaRepository<CompanyCareer, Long> {

}

