package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    @RequestMapping("/country")
    public Country getCountryIndia(){
        ApplicationContext context=new ClassPathXmlApplicationContext("countries.xml");
        Country country= (Country) context.getBean("IN",Country.class);

        return country;
    }
}
