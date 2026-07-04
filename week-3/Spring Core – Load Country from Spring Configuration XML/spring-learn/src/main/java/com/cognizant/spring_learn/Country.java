package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class Country {
    private static final Logger log = LoggerFactory.getLogger(Country.class);


    private String code;
    private String name;
    public Country(){
        log.debug("Inside the Country constructor");
    }
    public void setCode(String code){
        log.debug("Inside setCode()");
        this.code=code;

    }
    public void setName(String name){
        log.debug("Inside setName()");
        this.name=name;

    }
    public String getName(){
        log.debug("Inside getName");
        return name;
    }
    public String getCode(){
        log.debug("Inside getCode");
        return code;
    }

    @Override
    public String toString(){
        return "Country [code=" + code + ", name=" + name + "]";
    }




}
