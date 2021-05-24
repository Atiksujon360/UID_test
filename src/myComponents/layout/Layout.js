import React, { Component } from "react";
import MainNavigation from "./MainNavigation";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <main>{this.props.children}</main>
        {/* <main className={classes.main}>{this.props.children}</main> */}
      </div>
    );
  }
}
