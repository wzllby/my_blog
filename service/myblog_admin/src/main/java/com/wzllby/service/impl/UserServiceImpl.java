package com.wzllby.service.impl;

import com.wzllby.service.UserService;
import com.wzllby.entity.User;
import com.wzllby.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author wzllby
 * @date 2023年01月15日 13:15
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper mapper;

    @Override
    public User selectUser(String userName, String passWord) {
        return mapper.selectUser(userName, passWord);
    }
}
