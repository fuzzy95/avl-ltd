import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-green-500">
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
