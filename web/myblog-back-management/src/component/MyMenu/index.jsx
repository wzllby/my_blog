import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FileTextOutlined,
  ReadOutlined,
  ProfileOutlined,
  BarsOutlined,
  TagsOutlined,
  SettingOutlined,
  UserOutlined,
  UnlockOutlined,
  SolutionOutlined,
  LaptopOutlined,
  ScheduleOutlined,
  TeamOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('首页', '1', <HomeOutlined />),
  getItem('文章管理', '2', <FileTextOutlined />, [
    getItem('发布文章', '21', <ReadOutlined />),
    getItem('文章列表', '22', <ProfileOutlined />),
    getItem('分类管理', '23', <BarsOutlined />),
    getItem('标签管理', '24', <TagsOutlined />),
  ]),
  getItem('设置', '7', <SettingOutlined />, [
    getItem('网站管理', '71', <LaptopOutlined />),
    getItem('友链管理', '72', <TeamOutlined />),
    getItem('其他设置', '79', <ToolOutlined />),
  ]), 
  getItem('个人中心', '8', <UserOutlined />, [
    getItem('关于我', '81', <SolutionOutlined />),
    getItem('信息管理', '82', <ScheduleOutlined />),
    getItem('修改密码', '89', <UnlockOutlined />),
  ]), 
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const handsub = (dom) => {
    navigate("/main/artlist")
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
        onClick={handsub}
      />
    </div>
  );
};
export default App;