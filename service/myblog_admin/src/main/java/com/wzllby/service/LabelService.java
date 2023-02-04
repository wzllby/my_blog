package com.wzllby.service;

import com.wzllby.entity.LabelEntity;

import java.util.List;

public interface LabelService {

    List<LabelEntity> queryAllLabels();

    int addLabel(LabelEntity label);

    int deleteLabel(int key);

    int changeState(int key);
}
