package com.wzllby.controller;

import com.wzllby.constant.ResultMsgEnum;
import com.wzllby.entity.Label;
import com.wzllby.service.LabelService;
import com.wzllby.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 0:01
 */
@RestController
@RequestMapping("label")
public class LabelController {

    @Autowired
    private LabelService labelService;

    @GetMapping
    public ResultMsg getLabels() {
        List<Label> labels = labelService.queryAllLabels();
        if (labels == null) {
            return new ResultMsg(ResultMsgEnum.QUERY_ERROR_CODE, "query all labels error.");
        }
        return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, labels);
    }

    @PostMapping
    public ResultMsg addLabel(Label label) {
        int i = labelService.addLabel(label);
        if (i > 0) {
            return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, "add label " + label.getLabelName() + "success.") ;
        }
        return new ResultMsg(ResultMsgEnum.ADD_ERROR_CODE, "add label " + label.getLabelName() + "error.") ;
    }
}
