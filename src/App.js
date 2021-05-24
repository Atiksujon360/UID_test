import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
// import Landing from "./pages/Landing";
import GameList from "./pages/GameList";
import Home from "./pages/Home";
import Layout from "./myComponents/layout/Layout";
function App() {
  var rootStyle = {
    backgroundColor: "#ffc107",
    height: "100%",
    minHeight: "100vh",
  };
  return (
    <div style={rootStyle} className="App Padding">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/GameList">
            <GameList />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
