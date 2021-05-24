import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
const TabContainer = styled.div`
  .ant-btn {
    width: 100%;
    background-color: #1059ff;
    color: #fff;
    height: 35px;
    font-weight: bold;
  }
  .ant-input {
    border-radius: 5px;
  }
  .ant-input-affix-wrapper-lg {
    border-radius: 5px;
  }
  input::placeholder {
    color: #ced4da;
  }
  .ant-form-item-label > label {
    font-size: 14px;
    color: black;
  }
`;
class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <br />
        <TabContainer>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="EMAIL"
              name="email"
              rules={[
                {
                  required: true,
                  message: "The email field is required.",
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              label="PASSWORD"
              name="password"
              rules={[
                {
                  required: true,
                  message: "The password field is required.",
                },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
            <Form.Item name="remember">
              <div className="floatLeft">
                <Checkbox defaultChecked>Remember me</Checkbox>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                LOGIN
              </Button> 
            </Form.Item> 
            Or <a href="#">create a new account</a>
            
          </Form>
        </TabContainer>
      </div>
    );
  }
}

export default Login;
