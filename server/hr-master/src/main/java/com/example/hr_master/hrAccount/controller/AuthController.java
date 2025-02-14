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
    public ResponseEntity<String> login(@RequestBody LoginRequestDto loginRequest,
                                        HttpServletRequest request,
                                        HttpServletResponse response) {
        Long employeeId = loginRequest.getEmployeeId();
        boolean isAuthenticated = hrAccountService.authenticate(employeeId, loginRequest.getPassword());

        if (isAuthenticated) {
            // 1️⃣ 세션 생성
            HttpSession session = request.getSession(true); // 세션 생성 (없으면 생성)
            session.setAttribute("employeeId", employeeId); // 세션에 사용자 정보 저장
            session.setMaxInactiveInterval(60 * 60); // 1시간 유지

            // 2️⃣ 세션 ID를 쿠키에 저장
            response.addHeader("Set-Cookie", "JSESSIONID=" + session.getId() + "; Path=/; HttpOnly; Secure; SameSite=Strict");

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

        // 클라이언트의 쿠키를 만료시키기 위해 'Set-Cookie' 헤더 추가
        response.addHeader("Set-Cookie", "JSESSIONID=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0;");

        return ResponseEntity.ok("Logged out successfully");
    }

    @PostMapping("/check")
    public ResponseEntity<Boolean> checkLoginStatus(HttpServletRequest request) {
        HttpSession session = request.getSession(false); // 세션 가져오기 (없으면 null 반환)

        if (session != null && session.getAttribute("employeeId") != null) {
            return ResponseEntity.ok(true); // 로그인된 상태
        }

        return ResponseEntity.ok(false); // 로그인되지 않음
    }
}