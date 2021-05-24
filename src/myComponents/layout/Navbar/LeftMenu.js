import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
const TabContainer = styled.div`
   
`;
class LeftMenu extends Component {
  render() {
    return (
      <TabContainer>
        <Menu mode={this.props.mode}>
          <Menu.Item key="landing">
            <Link to="/">Landing</Link>
          </Menu.Item>

          <Menu.Item key="gameList">
            <Link to="/GameList">GameList</Link>
          </Menu.Item>
        </Menu>
      </TabContainer>
    );
  }
}

export default LeftMenu;
