package com.wzllby.mapper;

import com.wzllby.entity.LabelEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * @author wzllby
 * @date 2023年02月03日 0:09
 */
@Mapper
public interface LabelMapper {

    List<LabelEntity> queryAllLabels();

    int addLabel(LabelEntity label);

    int deleteLabel(int key);

    int changeState(Map<String, Object> mpa);

    LabelEntity getLabelById(int key);
}
