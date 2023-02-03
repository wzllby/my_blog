package com.wzllby.controller;

import com.wzllby.entity.ClassEntity;
import com.wzllby.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 21:07
 */
@RestController
@RequestMapping("class")
public class ClassController {

    @Autowired
    private ClassService classService;

    @PostMapping
    public List<ClassEntity> queryAllClasses() {
        return classService.queryAllClasses();
    }
}
