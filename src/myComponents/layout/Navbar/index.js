import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./Navbar.css";
const TabContainer = styled.div`
.ant-menu{
  background-color:transparent;
  color:white;
} 
`;
class Navbar extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <TabContainer>
        <nav className="menu">
          <div className="menu__logo">
            <a href="">UID</a>
          </div>
          <div className="menu__container">
            <div className="menu_left">
              <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_rigth">
              <RightMenu mode="horizontal" />
            </div>
            <Button
              className="menu__mobile-button"
              type="primary"
              onClick={this.showDrawer}
            >
              <AlignRightOutlined />
            </Button>
            <Drawer
              title="Menu Item"
              placement="right"
              className="menu_drawer"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu mode="inline" />
              <RightMenu mode="inline" />
            </Drawer>
          </div>
        </nav>
      </TabContainer>
    );
  }
}

export default Navbar;
