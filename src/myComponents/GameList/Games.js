import React, { Component } from "react";
import { Row, Col, List, Card } from "antd";
import styled from "styled-components";
import "../../App.css";
const TabContainer = styled.div`
  .ant-card-body {
    padding: 0;
    background-color: #ffc107;
  }
  .ant-card-bordered .ant-card-cover {
    margin: -1px;
  }
`;

const data = [
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/maxiscny/"
          style={{ color: "#fff"}}
        >
          Maxis | Catch that Health
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Collect 'Em Al</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/E3VsdODPuZgtjytruzJL.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/pepperlunch/"
          style={{ color: "#fff" }}
        >
          PepperLunch | Spot 15 Differences
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Spot the Difference</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/Dt9wGUsk539ZtPDpEWGr.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/tsubaki/"
          style={{ color: "#fff" }}
        >
          Tsubaki | Forget Me Knot
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Flip & Match</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/X9Y1zrM7tjIhMrbSnZIm.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/dprogram/"
          style={{ color: "#fff" }}
        >
          d program by Shiseido Group | Gentle Cleansing Solution
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Tap & Drag</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/ueal8OaUnsrevgd5BQJe.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/bleedstopper/"
          style={{ color: "#fff" }}
        >
          Johnson & Johnson | Bleed Stopper
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Shooter</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/tM1JBAmw2uBvB8UacPcK.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://berg.uid-testing.space/gamelist/setiacitymall/"
          style={{ color: "#fff" }}
        >
          Setia City Mall | Catch The Lucky Orange Game
        </a>
        <p style={{ color: "#ececec" }}>Web Game - Collect 'Em Al</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/h3CBIlzySp7ZUWFuS0fW.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://www.instagram.com/ar/3580349065524618/"
          style={{ color: "#fff" }}
        >
          Ho Yan Hor | Huat Moo-ment
        </a>
        <p style={{ color: "#ececec" }}>SparkAR - Collect 'Em All</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/TV9DrecTxY7Yyy7uVft3.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://www.instagram.com/ar/221196302982453/"
          style={{ color: "#fff" }}
        >
          Red Eagle | ???????????? ?????????3???
        </a>
        <p style={{ color: "#ececec" }}>SparkAR - Filter</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/XPn9Qmb4yOlFNLahjabi.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://www.instagram.com/ar/1869548256526851/"
          style={{ color: "#fff" }}
        >
          Red Eagle | ???????????? ??????
        </a>
        <p style={{ color: "#ececec" }}>SparkAR - Immersive</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/Jo0JNBc1FfznSEKog38A.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://jvf.zappar.io/2092925128499313711/2.0.0/index.html"
          style={{ color: "#fff" }}
        >
          UID | Jump Jump! Space Ranger
        </a>
        <p style={{ color: "#ececec" }}>WebAR - Jump Shot</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/bXk9lUCg6PijcuQkH2l8.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://jvf.zappar.io/3386367925969838988/2.0.0/index.html"
          style={{ color: "#fff" }}
        >
          UID | AR Spot the Difference
        </a>
        <p style={{ color: "#ececec" }}>WebAR - Spot the Difference</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/4KW4oKIUdUkYbcOf5YIe.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a href="https://playcanv.as/b/Mldq5TQ0/" style={{ color: "#fff" }}>
          UID | Epic Dunk Fun
        </a>
        <p style={{ color: "#ececec" }}>WebAR - Aim & Shoot</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/nFaT52TL6FqUAIzxZeW8.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://jvf.zappar.io/2518416787964324795/3.0.1/index.html"
          style={{ color: "#fff" }}
        >
          UID | Game On Survey
        </a>
        <p style={{ color: "#ececec" }}>WebAR - Survey</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/cC66UuulhloKMoejCQ7m.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://jvf.zappar.io/5513409516596199215/1.0.8/"
          style={{ color: "#fff" }}
        >
          Nestl?? Professional | God of Prosperity
        </a>
        <p style={{ color: "#ececec" }}>WebAR - Surface Tracking</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/jO5bJWL7HecGVxN6gu1m.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://skin-analysis-2021.uid-testing.space"
          style={{ color: "#fff" }}
        >
          Face Analysis
        </a>
        <p style={{ color: "#ececec" }}>Face Analysis</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/OE3rOqxLIIBCTPyqYqEb.jpg"
      />
    ),
  },
  {
    title: (
      <div>
        <a
          href="https://www.facebook.com/fbcameraeffects/tryit/954019472071651/"
          style={{ color: "#fff" }}
        >
          Nestl?? Professional | RIUH RAYA BY NESTL??
        </a>
        <p style={{ color: "#ececec" }}>SparkAR - Filte</p>
      </div>
    ),
    description: (
      <img
        alt="game"
        src="https://gamesshowcase.uid-testing.space/storage/games-lists/May2021/uV30YQWynkCtx01KOzS8.jpg"
      />
    ),
  },
];

class Games extends Component {
  render() {
    return (
      <div>
        <br />
        <TabContainer>
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <div>
                <img
                  alt="logo"
                  className="GameLogo"
                  src="https://gamesshowcase.uid-testing.space/img/logo.png"
                />
              </div>
              <h1 className="GameShowcase">Game showcase</h1>
            </Col>
            <Col span={8}></Col>
          </Row>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card cover={item.description}></Card>
                <p>{item.title}</p>
              </List.Item>
            )}
          />
        </TabContainer>
      </div>
    );
  }
}

export default Games;
