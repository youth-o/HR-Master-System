package com.example.hr_master.employee.service;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
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

    // 사원 추가 기능
    public Employee addEmployee(Employee employee) {
        // 필요에 따라 추가적인 검증 로직을 구현할 수 있습니다.
        return employeeRepository.save(employee);
    }

    // 사원 정보 수정 (전체 업데이트)
    @Transactional
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

    // 사원 정보 부분 업데이트 (PATCH)
    @Transactional
    public Employee patchEmployee(Long id, Map<String, Object> updates) {
        return employeeRepository.findById(id)
                .map(employee -> {
                    updates.forEach((key, value) -> {
                        try {
                            Field field = Employee.class.getDeclaredField(key);
                            field.setAccessible(true);

                            // Enum 타입 필드인 경우 변환 필요
                            if (field.getType().isEnum()) {
                                Object enumValue = Enum.valueOf((Class<Enum>) field.getType(), value.toString());
                                field.set(employee, enumValue);
                            } else {
                                field.set(employee, value);
                            }
                        } catch (NoSuchFieldException | IllegalAccessException | IllegalArgumentException e) {
                            throw new RuntimeException("Invalid field: " + key + " or invalid value: " + value);
                        }
                    });
                    return employeeRepository.save(employee);
                })
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }


    // 데이터 타입 변환 메서드
    private Object convertValue(Class<?> fieldType, Object value) {
        if (value == null) return null;

        if (fieldType == String.class) {
            return value.toString();
        } else if (fieldType == Integer.class || fieldType == int.class) {
            return Integer.parseInt(value.toString());
        } else if (fieldType == Long.class || fieldType == long.class) {
            return Long.parseLong(value.toString());
        } else if (fieldType == Double.class || fieldType == double.class) {
            return Double.parseDouble(value.toString());
        } else if (fieldType == Boolean.class || fieldType == boolean.class) {
            return Boolean.parseBoolean(value.toString());
        }
        return value; // 기본적으로 변환 없이 그대로 저장
    }

    // 사원 삭제
    @Transactional
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
