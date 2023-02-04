package com.wzllby.util;

import com.wzllby.constant.ResultMsgEnum;

import java.util.Map;

/**
 * @author wzllby
 * @date 2023年02月03日 21:37
 */
public class ResultMsg {
    private ResultMsgEnum resultMsgEnum;

    private String msg;

    private Map<String, Object> data;

    private Integer code;

    public ResultMsg(ResultMsgEnum resultMsgEnum) {
        this.resultMsgEnum = resultMsgEnum;
        this.code = resultMsgEnum.getValue();
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, String msg) {
        this.resultMsgEnum = resultMsgEnum;
        this.msg = msg;
        this.code = resultMsgEnum.getValue();
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, Map<String, Object> data) {
        this.resultMsgEnum = resultMsgEnum;
        this.data = data;
        this.code = resultMsgEnum.getValue();
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, String msg, Map<String, Object> data) {
        this.resultMsgEnum = resultMsgEnum;
        this.msg = msg;
        this.data = data;
        this.code = resultMsgEnum.getValue();
    }

    public ResultMsgEnum getResultMsgEnum() {
        return resultMsgEnum;
    }

    public void setResultMsgEnum(ResultMsgEnum resultMsgEnum) {
        this.resultMsgEnum = resultMsgEnum;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
