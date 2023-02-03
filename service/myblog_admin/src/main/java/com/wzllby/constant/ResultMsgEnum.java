package com.wzllby.constant;

/**
 * @author wzllby
 * @date 2023年02月03日 21:41
 */
public enum ResultMsgEnum {

    SUCCESS_CODE(200),

    QUERY_ERROR_CODE(501),

    ADD_ERROR_CODE(502);

    private int value;
    private ResultMsgEnum(int value) {
        this.value = value;
    }
}
