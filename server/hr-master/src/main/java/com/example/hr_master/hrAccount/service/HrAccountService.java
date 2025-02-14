package com.example.hr_master.hrAccount.service;

import com.example.hr_master.hrAccount.entity.HrAccount;
import com.example.hr_master.hrAccount.repository.HrAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HrAccountService {
    private final HrAccountRepository hrAccountRepository;

    public boolean authenticate(Long employeeId, String password) {
        Optional<HrAccount> account = hrAccountRepository.findByEmployee_EmployeeId(employeeId);

        return account.map(hrAccount -> hrAccount.getPassword().equals(password)).orElse(false);
    }
}
