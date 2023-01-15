import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Button, Checkbox, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    function onFinish(data) {
        // 登录请求
        const {username, password} = data;
        if (username === 'root' && password === '123456') {
           navigate('/main')
        } else {
            navigate('/login')
        }
    }
    return (
        <Row justify="center" align="middle" className='login-main-row'>
            <Card title="我的博客后台登陆" 
            hoverable="true" 
            className='login-card-main' 
            style={{ width: 300 }}>
                        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: '请输入用户名!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" 
                valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="#s">
                重置密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" 
                htmlType="submit" 
                className="login-form-button" >
                登陆
                </Button>
            </Form.Item>
            </Form>
            </Card>
        </Row>    
    )
};
export default App;