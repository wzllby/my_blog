package com.wzllby.service;

import com.wzllby.entity.Label;

import java.util.List;

public interface LabelService {

    List<Label> queryAllLabels();

    int addLabel(Label label);
}
