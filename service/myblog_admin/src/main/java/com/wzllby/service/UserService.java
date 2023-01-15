package com.wzllby.service;

import com.wzllby.entity.User;

public interface UserService {
    User selectUser(String userName, String passWord);
}
