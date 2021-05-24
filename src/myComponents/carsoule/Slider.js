import React, { Component } from "react";
import { Carousel} from "antd";
import "../../App.css";

class Slider extends Component {
  render() {
    return (
      <div >
        <br />
        <Carousel dots={false} autoplay>
          <div>
            <img
              className="slider"
              src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/uV30YQWynkCtx01KOzS8.jpg"
            />
          </div>
          <div>
            <img
              className="slider"
              src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/E3VsdODPuZgtjytruzJL.jpg"
            />
          </div>
          <div>
            <img
              className="slider"
              src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/tM1JBAmw2uBvB8UacPcK.jpg"
            />
          </div>
          <div>
            <img
              className="slider"
              src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/h3CBIlzySp7ZUWFuS0fW.jpg"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
