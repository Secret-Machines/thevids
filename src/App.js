import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import WavesHome from "./components/Waves/WavesHome";
import Waves1 from "./components/Waves/Waves1";
import Waves2 from "./components/Waves/Waves2";
import AutumnHome from "./components/Autumn/AutumnHome";
import Waves3 from "./components/Waves/Waves3";
import FogHome from "./components/Fog/FogHome";
import Fog1 from "./components/Fog/Fog1";
import Fog3 from "./components/Fog/Fog3";
import Fog2 from "./components/Fog/Fog2";
import Autumn1 from "./components/Autumn/Autumn1";
import Autumn2 from "./components/Autumn/Autumn2";
import Autumn3 from "./components/Autumn/Autumn3";
import SpaceHome from "./components/Space/SpaceHome";
import Space1 from "./components/Space/Space1";
import Space2 from "./components/Space/Space2";
import Space3 from "./components/Space/Space3";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";

export default () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/waves" component={WavesHome} />
          <PrivateRoute exact path="/waves/1" component={Waves1} />
          <PrivateRoute exact path="/waves/2" component={Waves2} />
          <PrivateRoute exact path="/waves/3" component={Waves3} />
          <PrivateRoute exact path="/autumn" component={AutumnHome} />
          <PrivateRoute exact path="/autumn/1" component={Autumn1} />
          <PrivateRoute exact path="/autumn/2" component={Autumn2} />
          <PrivateRoute exact path="/autumn/3" component={Autumn3} />
          <PrivateRoute exact path="/fog" component={FogHome} />
          <PrivateRoute exact path="/fog/1" component={Fog1} />
          <PrivateRoute exact path="/fog/2" component={Fog2} />
          <PrivateRoute exact path="/fog/3" component={Fog3} />
          <PrivateRoute exact path="/space" component={SpaceHome} />
          <PrivateRoute exact path="/space/1" component={Space1} />
          <PrivateRoute exact path="/space/2" component={Space2} />
          <PrivateRoute exact path="/space/3" component={Space3} />
        </Switch>
      </div>
    </Router>
  );
};
