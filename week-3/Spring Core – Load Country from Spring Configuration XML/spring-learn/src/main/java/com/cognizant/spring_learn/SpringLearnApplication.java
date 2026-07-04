package com.cognizant.spring_learn;

import org.apache.juli.logging.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
	private static final Logger log = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(SpringLearnApplication.class, args);

		displayCountry();




	}
	public static void displayCountry(){
		ApplicationContext context= new ClassPathXmlApplicationContext("countries.xml");
		Country country= (Country) context.getBean("IN",Country.class);
		log.debug("Country : {}",country.toString());


	}

}
