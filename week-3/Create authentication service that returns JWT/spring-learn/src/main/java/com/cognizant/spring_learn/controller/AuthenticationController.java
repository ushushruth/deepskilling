package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.service.AuthResp;
import com.cognizant.spring_learn.service.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;

@RestController
public class AuthenticationController {
    @GetMapping("/authenticate")
    public AuthResp authenticate(@RequestHeader("Authorization") String authHeader){
        String header=authHeader.substring(6);
        byte[] bytes= Base64.getDecoder().decode(header);
        String credentials= new String(bytes);
        String[] details= credentials.split(":");
        String username= details[0];
        String password=details[1];
        if(username.equals("user")&&password.equals("pwd")){
            String token= Jwt.generateToken(username);
            return new AuthResp(token);
        }
        return null;


    }
}
