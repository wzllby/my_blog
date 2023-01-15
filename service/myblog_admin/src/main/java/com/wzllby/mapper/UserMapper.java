package com.wzllby.mapper;

import com.wzllby.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    /**
     * 查询单个用户
     *
     * @author wzllby
     * @date 2023-01-15 13:02
     * @return int
     */
    User selectUser(String userName, String passWord);
}
