package com.wzllby.util;

import com.wzllby.constant.ResultMsgEnum;

/**
 * @author wzllby
 * @date 2023年02月03日 21:37
 */
public class ResultMsg {
    private ResultMsgEnum resultMsgEnum;

    private String msg;

    private Object data;

    public ResultMsg(ResultMsgEnum resultMsgEnum) {
        this.resultMsgEnum = resultMsgEnum;
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, String msg) {
        this.resultMsgEnum = resultMsgEnum;
        this.msg = msg;
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, Object data) {
        this.resultMsgEnum = resultMsgEnum;
        this.data = data;
    }

    public ResultMsg(ResultMsgEnum resultMsgEnum, String msg, Object data) {
        this.resultMsgEnum = resultMsgEnum;
        this.msg = msg;
        this.data = data;
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

    public void setData(Object data) {
        this.data = data;
    }
}
