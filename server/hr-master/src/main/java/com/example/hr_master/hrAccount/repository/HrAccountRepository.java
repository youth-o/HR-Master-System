package com.example.hr_master.hrAccount.repository;

import com.example.hr_master.hrAccount.entity.HrAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface HrAccountRepository extends JpaRepository<HrAccount, Long> {
    Optional<HrAccount> findByEmployee_EmployeeId(Long employeeId);
}