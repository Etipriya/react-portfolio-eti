import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Projects">
        <Projects />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
