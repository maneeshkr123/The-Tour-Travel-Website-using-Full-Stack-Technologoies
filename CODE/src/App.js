import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import Terms from './components/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/terms" exact component={Terms} />
      </Switch>
      <Footer />
    </Router>       
    </>
  );
}

export default App;
