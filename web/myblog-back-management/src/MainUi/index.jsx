import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Layout, theme, Avatar, Image, Row, Col, Dropdown, Space } from 'antd';
import MyMenu from '../component/MyMenu';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: '1',
    label: (
      <Link to='/login' rel="noopener noreferrer" >退出</Link>
    ),
  }
];
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        style={{
          overflow: 'auto',
          height: '100vh',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        // collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="logo" />
        <MyMenu />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          >
          <Row>
            <Col push={23}>
            <Avatar size={64} shape="circle"
      src={
        <Image
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F09%2F20210609081952_51ef5.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673614599&t=c86ea6c36154fad3f27d25e6df6a9b3b"
          icon={<UserOutlined />}
          style={{
            width: 32,
          }}
        />
      }
    />
    <Dropdown
    menu={{
      items,
    }}
  >
    <a href='#javascript' onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </Col>
          </Row>
          </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
           <Outlet></Outlet>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;