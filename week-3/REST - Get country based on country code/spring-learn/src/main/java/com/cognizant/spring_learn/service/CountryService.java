package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CountryService {

    public static Country getCountry(String code){
        ApplicationContext context= new ClassPathXmlApplicationContext("countries.xml");
        Country country= (Country) context.getBean(code,Country.class);
        return country;


    }
}
