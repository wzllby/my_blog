package com.wzllby.controller;

import com.wzllby.constant.ResultMsgEnum;
import com.wzllby.entity.LabelEntity;
import com.wzllby.service.LabelService;
import com.wzllby.util.ResultMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        List<LabelEntity> labels = labelService.queryAllLabels();
        if (labels == null) {
            return new ResultMsg(ResultMsgEnum.QUERY_ERROR_CODE, "query all labels error.");
        }
        Map<String, Object> map = new HashMap<>();
        map.put("data", labels);
        return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, map);
    }

    @PostMapping
    public ResultMsg addLabel(LabelEntity label) {
        int i = labelService.addLabel(label);
        if (i > 0) {
            return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, "add label " + label.getLabelName() + "success.") ;
        }
        return new ResultMsg(ResultMsgEnum.ADD_ERROR_CODE, "add label " + label.getLabelName() + "error.") ;
    }

    @DeleteMapping
    public ResultMsg deleteLabel(int key) {
        int i = labelService.deleteLabel(key);
        if (i > 0) {
            return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, "delete label success.") ;
        }
        return new ResultMsg(ResultMsgEnum.ADD_ERROR_CODE, "delete label error.") ;
    }

    @PutMapping
    public ResultMsg changeState(int key) {
        int i = labelService.changeState(key);
        if (i > 0) {
            return new ResultMsg(ResultMsgEnum.SUCCESS_CODE, "change label state success.") ;
        }
        return new ResultMsg(ResultMsgEnum.ADD_ERROR_CODE, "change label state error.") ;
    }
}
