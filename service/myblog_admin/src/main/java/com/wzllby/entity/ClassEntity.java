package com.wzllby.entity;

import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * @author wzllby
 * @date 2023年02月03日 21:08
 */
public class ClassEntity {
    private Integer id;

    private String className;

    private Integer state;

    private Date createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
