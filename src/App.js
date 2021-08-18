// import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Switch } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

// import About from "./components/About";
// import Contact from "./components/Contact";
// import Header from "./components/Header";
// import Projects from "./components/Projects";

const App = () => {
  return (
    <Router basename="/">
      <Navigation />
      <Switch>
        <div className="App">
          <Home />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
