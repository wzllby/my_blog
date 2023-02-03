package com.wzllby.mapper;

import com.wzllby.entity.ClassEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 21:13
 */
@Mapper
public interface ClassMapper {
    List<ClassEntity> queryAllClasses();
}
