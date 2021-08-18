import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Routes from "./Routes";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
