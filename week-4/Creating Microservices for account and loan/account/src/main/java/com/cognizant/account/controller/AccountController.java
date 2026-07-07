package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @GetMapping("/account/{number}")
    public String getAccount(){
        return "{ number: \"00987987973432\", type: \"savings\", balance: 234343 }";
    }
}
