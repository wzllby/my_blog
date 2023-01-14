import React from 'react';
import { EnvironmentTwoTone } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';
const style = {
  background: '#0092ff',
  padding: '8px 0',
  height: '100px'
};
const App = () => (
  <>
    <Divider orientation="left">数据统计</Divider>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style} className="">
            <EnvironmentTwoTone style={{fontSize: 70}} twoToneColor="#52c41a"/>
            <span>用户量</span>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);
export default App;