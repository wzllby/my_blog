import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Button, Checkbox, Form, Input, Row } from 'antd';
export default class Login extends Component {
    
    onFinish = (data) => {
        console.log(data);
    };

    render() {
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
                onFinish={this.onFinish}
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
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="#s">
                    重置密码
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    登陆
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                </Form.Item>
                </Form>
                </Card>
            </Row>    
        )
    }
}
