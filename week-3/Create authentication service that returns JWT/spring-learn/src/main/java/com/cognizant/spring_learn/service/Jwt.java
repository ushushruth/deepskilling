package com.cognizant.spring_learn.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class Jwt {
    private static final String secret="cognizantcognizantcognizantcognizantcognizantcognizantcognizant";
    public static String generateToken(String username){
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+80000))
                .signWith(SignatureAlgorithm.HS256,secret)
                .compact()
                .toString();
    }
}
