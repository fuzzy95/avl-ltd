import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./components/Typographys/CustomCss/App.scss";

const App = () => {
  return (
    <>
      <Router>
        <div className="relative">
          <div className="lg:block hidden">
            <img className="bgimage" src="/img/officefinal.jpg" alt="" />
          </div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
