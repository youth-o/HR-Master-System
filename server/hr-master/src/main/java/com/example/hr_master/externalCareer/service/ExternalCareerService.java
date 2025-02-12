package com.example.hr_master.externalCareer.service;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.externalCareer.entity.ExternalCareer;
import com.example.hr_master.externalCareer.repository.ExternalCareerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExternalCareerService {

    private final ExternalCareerRepository externalCareerRepository;

    @Autowired
    public ExternalCareerService(ExternalCareerRepository externalCareerRepository) {
        this.externalCareerRepository = externalCareerRepository;
    }

    // 전체 사외 경력 조회
    public List<ExternalCareer> getAllExternalCareers() {
        return externalCareerRepository.findAll();
    }

    // 특정 employeeId의 사외 경력 조회
    public List<ExternalCareer> getExternalCareersByEmployeeId(Long employeeId) {
        return externalCareerRepository.findByEmployee_EmployeeId(employeeId);
    }

    // 특정 employeeId의 사외 경력 추가
    public ExternalCareer createExternalCareerForEmployee(Long employeeId, ExternalCareer externalCareer) {
        // employeeId만 가지고 Employee 객체를 생성하여 설정
        Employee employee = new Employee();
        employee.setEmployeeId(employeeId);
        externalCareer.setEmployee(employee);
        return externalCareerRepository.save(externalCareer);
    }

    // 사외 경력 수정 (careerId 기준)
    public ExternalCareer updateExternalCareer(Long careerId, ExternalCareer updatedExternalCareer) {
        Optional<ExternalCareer> optionalCareer = externalCareerRepository.findById(careerId);
        if (optionalCareer.isPresent()) {
            ExternalCareer existingCareer = optionalCareer.get();
            // 수정할 필드 업데이트 (필요에 따라 추가/변경)
            existingCareer.setCompanyName(updatedExternalCareer.getCompanyName());
            existingCareer.setJobTitle(updatedExternalCareer.getJobTitle());
            existingCareer.setPosition(updatedExternalCareer.getPosition());
            existingCareer.setHireDate(updatedExternalCareer.getHireDate());
            existingCareer.setResignationDate(updatedExternalCareer.getResignationDate());
            existingCareer.setAnnualSalary(updatedExternalCareer.getAnnualSalary());
            // 만약 employee 정보도 업데이트할 필요가 있다면 아래와 같이 처리
            if (updatedExternalCareer.getEmployee() != null) {
                existingCareer.setEmployee(updatedExternalCareer.getEmployee());
            }
            return externalCareerRepository.save(existingCareer);
        } else {
            throw new RuntimeException("ExternalCareer not found with id: " + careerId);
        }
    }

    // 사외 경력 삭제 (careerId 기준)
    public void deleteExternalCareer(Long careerId) {
        externalCareerRepository.deleteById(careerId);
    }
}
