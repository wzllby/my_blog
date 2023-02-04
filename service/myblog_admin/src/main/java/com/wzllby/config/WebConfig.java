package com.wzllby.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author wzllby
 * @date 2023年02月03日 23:41
 */
//@Configurable
public class WebConfig implements WebMvcConfigurer {
    /**
     * 这种方式解决跨域为什么不生效？
     *
     * @author wzllby
     * @date 2023-02-04 12:09
     * @param registry
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedHeaders("*")
                .allowedMethods("*")
                .maxAge(1800)
                .allowedOrigins("*")
                .allowCredentials(true);
        WebMvcConfigurer.super.addCorsMappings(registry);
    }
}
