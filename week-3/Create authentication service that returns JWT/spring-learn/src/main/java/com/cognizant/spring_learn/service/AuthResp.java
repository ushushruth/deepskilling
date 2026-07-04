package com.cognizant.spring_learn.service;

public class AuthResp {
   private String token;
    public AuthResp(String token){
        this.token=token;
    }
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }



}
