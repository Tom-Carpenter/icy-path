  
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import IntroBlog from './components/IntroBlog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
         <NavBar />
    <Switch>
          <Route path="/latest">
            <Blogs />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/firstblog">
            <IntroBlog />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}
export default App;