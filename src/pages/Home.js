import React, { Component } from "react";
import Landing from "./Landing";
import Slider from "../myComponents/carsoule/Slider";
import "../App.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="column rowContent">
            <img
              className="twoRow"
              src="https://gamesshowcase.uid-testing.space/img/waves-two.png"
            />
          </div>
          <div className="column rowContent">
            <img
              className="logo "
              src="https://gamesshowcase.uid-testing.space/img/logo.png"
            />
          </div>
          <div className="column rowContent">
            <img
              className="signUp"
              src="https://gamesshowcase.uid-testing.space/img/signup-text.png"
            />
          </div>
        </div>

        <div className="row">
          <div className="column rowContent">
            <Slider />
            <img style={{width:'auto',padding:20,float:'left'}}
              src="https://gamesshowcase.uid-testing.space/img/waves-three.png"
            />
          </div>
          <div className="column rowContent">
            <Landing />
          </div>
        </div>
      </div>
    );
  }
}
