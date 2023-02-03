package com.wzllby.mapper;

import com.wzllby.entity.Label;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author wzllby
 * @date 2023年02月03日 0:09
 */
@Mapper
public interface LabelMapper {

    List<Label> queryAllLabels();

    int addLabel(Label label);
}
