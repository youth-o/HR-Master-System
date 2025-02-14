package com.example.hr_master.hrAccount.controller;

import com.example.hr_master.hrAccount.dto.LoginRequestDto;
import com.example.hr_master.hrAccount.service.HrAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//Logout imports
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final HrAccountService hrAccountService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestDto loginRequest) {
        Long employeeId = loginRequest.getEmployeeId();
        boolean isAuthenticated = hrAccountService.authenticate(employeeId, loginRequest.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("http://localhost:3000/main");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false); // 세션이 존재할 경우 가져옴
        if (session != null) {
            session.invalidate(); // 세션 무효화
        }

        return ResponseEntity.ok("Logged out successfully");
    }
}
