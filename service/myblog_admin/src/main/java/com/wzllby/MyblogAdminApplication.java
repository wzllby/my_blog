package com.wzllby;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@MapperScan("com.wzllby.mapper")
@SpringBootApplication
public class MyblogAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyblogAdminApplication.class, args);
	}
}
