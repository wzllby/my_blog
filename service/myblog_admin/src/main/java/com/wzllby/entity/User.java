package com.wzllby.entity;

/**
 * User类
 *
 * @author wzllby
 * @date 2023年01月15日 12:35
 */
public class User {
    private int id;

    private String userName;

    private String passWord;

    private int state;

    public User(String userName, String passWord, int state) {
        this.userName = userName;
        this.passWord = passWord;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
