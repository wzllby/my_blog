package com.wzllby.controller;

import com.wzllby.entity.Label;
import com.wzllby.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Label> getLabels() {
        return labelService.queryAllLabels();
    }
}
