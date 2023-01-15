package com.wzllby.controller;

import com.wzllby.service.UserService;
import com.wzllby.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author wzllby
 * @date 2023年01月15日 13:11
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping("login/{userName}/{passWord}")
    public User login(@PathVariable("userName")String userName, @PathVariable("passWord")String passWord) {
        return userService.selectUser(userName, passWord);
    }
}
