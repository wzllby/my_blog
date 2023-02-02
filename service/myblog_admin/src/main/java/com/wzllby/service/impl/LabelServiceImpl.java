package com.wzllby.service.impl;

import com.wzllby.entity.Label;
import com.wzllby.mapper.LabelMapper;
import com.wzllby.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 0:04
 */
@Service
public class LabelServiceImpl implements LabelService {

    @Autowired
    private LabelMapper labelMapper;

    @Override
    public List<Label> queryAllLabels() {
        return labelMapper.queryAllLabels();
    }
}
