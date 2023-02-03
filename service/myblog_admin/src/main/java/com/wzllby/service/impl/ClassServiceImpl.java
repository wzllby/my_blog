package com.wzllby.service.impl;

import com.wzllby.entity.ClassEntity;
import com.wzllby.mapper.ClassMapper;
import com.wzllby.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 21:12
 */
@Service
public class ClassServiceImpl implements ClassService {

    @Autowired
    private ClassMapper classMapper;

    @Override
    public List<ClassEntity> queryAllClasses() {
        return classMapper.queryAllClasses();
    }
}
