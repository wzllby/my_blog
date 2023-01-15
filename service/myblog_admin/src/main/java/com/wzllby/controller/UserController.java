package com.wzllby.controller;

import com.wzllby.service.UserService;
import com.wzllby.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

/**
 * @author wzllby
 * @date 2023年01月15日 13:11
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RedisTemplate redisTemplate;

    @PostMapping("login/")
    public User login(@RequestBody User user) {
        
        return userService.selectUser(user.getUserName(), user.getPassWord());
    }
}
