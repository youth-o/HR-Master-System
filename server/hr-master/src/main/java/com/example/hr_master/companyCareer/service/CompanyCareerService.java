package com.example.hr_master.companyCareer.service;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import com.example.hr_master.enumList.ChangeType;
import com.example.hr_master.companyCareer.entity.CompanyCareer;
import com.example.hr_master.companyCareer.repository.CompanyCareerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyCareerService {
    private final CompanyCareerRepository companyCareerRepository;
    private final EmployeeRepository employeeRepository;

    //모든 사내 경력 조회
    public List<CompanyCareer> getAllCompanyCareers(Long employeeId) {
        employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + employeeId));
        return companyCareerRepository.findAll()
                .stream()
                .filter(companyCareer -> companyCareer.getEmployee().getEmployeeId().equals(employeeId))
                .toList();
    }

    //특정 사내 경력 조회
    public CompanyCareer getCompanyCareer(Long employeeId, Long historyId) {
        employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + employeeId));
        return companyCareerRepository.findById(historyId)
                .orElseThrow(() -> new RuntimeException("Company Career not found with Id: " + historyId));
    }

    //사내 경력 추가
    public CompanyCareer saveCompanyCareer(Long employeeId, CompanyCareer companyCareer) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        companyCareer.setEmployee(employee);
        return companyCareerRepository.save(companyCareer);
    }

    //사내 경력 수정
    public CompanyCareer updateCompanyCareer(Long careerId, CompanyCareer updatedCompanyCareer) {
        return companyCareerRepository.findById(careerId).map(companyCareer -> {
            ChangeType changeType = updatedCompanyCareer.getChangeType();

            switch(changeType){
                case 부서이동:
                    companyCareer.setDepartment(updatedCompanyCareer.getDepartment());
                    companyCareer.setChangeDate(updatedCompanyCareer.getChangeDate());
                    break;
                case 직급변경:
                    companyCareer.setPosition(updatedCompanyCareer.getPosition());
                    companyCareer.setChangeDate(updatedCompanyCareer.getChangeDate());
                    break;
                case 기타:
                    companyCareer.setDivision(updatedCompanyCareer.getDivision());
                    companyCareer.setWorkLocation(updatedCompanyCareer.getWorkLocation());
                    companyCareer.setEndDate(updatedCompanyCareer.getEndDate());
                    companyCareer.setChangeDate(updatedCompanyCareer.getChangeDate());
                    break;
                default:
                    throw new IllegalArgumentException("잘못된 변경 유형: " + changeType);
            }
            return companyCareerRepository.save(companyCareer);
        }).orElseThrow(() -> new RuntimeException("Company Career not found"));
    }
}