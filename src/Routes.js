import { Switch, Route } from "react-router-dom";
import { Contact } from "./components/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
