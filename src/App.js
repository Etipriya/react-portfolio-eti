import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import { Switch } from "react-router";

import Routes from "./Routes";

import "./App.css";

// import { HashRouter as Router } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Header from "./components/Header";
// import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Navigation />
        {/* <Switch> */}
        <Routes />
        <Footer />
        {/* </Switch> */}
      </Router>
    </div>
  );
};

export default App;
