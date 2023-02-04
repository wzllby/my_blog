package com.wzllby.service.impl;

import com.wzllby.entity.LabelEntity;
import com.wzllby.mapper.LabelMapper;
import com.wzllby.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author wzllby
 * @date 2023年02月03日 0:04
 */
@Service
public class LabelServiceImpl implements LabelService {

    @Autowired
    private LabelMapper labelMapper;

    @Override
    public List<LabelEntity> queryAllLabels() {
        return labelMapper.queryAllLabels();
    }

    @Override
    public int addLabel(LabelEntity label) {
        label.setState(0);
        label.setCreateTime(new Date());
        return labelMapper.addLabel(label);
    }

    @Override
    public int deleteLabel(int key) {
        return labelMapper.deleteLabel(key);
    }

    @Override
    public int changeState(int key) {
        Map<String, Object> map = new HashMap<>();
        map.put("key", key);
        LabelEntity label = labelMapper.getLabelById(key);
        map.put("state", label.getState() == 0 ? 1 : 0);
        return labelMapper.changeState(map);
    }


}
