import "./css/App.css";
import Home from "./Home.js";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
