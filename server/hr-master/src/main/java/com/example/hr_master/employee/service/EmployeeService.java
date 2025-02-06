// 사원 정보의 CRUD 로직을 처리하는 서비스 클래스
package com.example.hr_master.employee.service;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    // 모든 사원 조회
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // 특정 사원 조회
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    // 사원 등록
    @Transactional
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // 사원 정보 수정
    public Employee updateEmployee(Long id, Employee updatedEmployee) {
        return employeeRepository.findById(id).map(employee -> {
            employee.setEmpName(updatedEmployee.getEmpName());
            employee.setPhone(updatedEmployee.getPhone());
            employee.setDepartment(updatedEmployee.getDepartment());
            employee.setPosition(updatedEmployee.getPosition());
            employee.setCompanyEmail(updatedEmployee.getCompanyEmail());
            return employeeRepository.save(employee);
        }).orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    // 사원 삭제
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}