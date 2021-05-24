import React, { Component } from "react";
import "antd/dist/antd.css";
import { Card, Tabs } from "antd";
import Login from "../myComponents/Landing/Login";
import Register from "../myComponents/Landing/Register";
import "../App.css";
import styled from "styled-components";

const TabContainer = styled.div`
  .ant-tabs-ink-bar {
    width: 50% !important;
  }

  .ant-tabs-nav .ant-tabs-tab:hover {
    color: white !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: black !important;
  }
  .ant-card-body {
    background-color: #f1f1f1;
    ${"" /* min-height: 550px; */}
    padding-left: 38px;
    padding-right: 38px;
    border-radius: 2px;
  }
`;

const { TabPane } = Tabs;
class Landing extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <TabContainer>
            <Card>
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab={<div>EXISTING USER</div>} key="1">
                  <Login />
                </TabPane>
                <TabPane tab={<div>NEW USER</div>} key="2">
                  <Register />
                </TabPane>
              </Tabs>
            </Card>{" "}
          </TabContainer>
        </div>
      </div>
    );
  }
}

export default Landing;
