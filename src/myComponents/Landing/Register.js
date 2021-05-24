import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
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
class Register extends Component {
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
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" size="large" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </TabContainer>
      </div>
    );
  }
}

export default Register;
