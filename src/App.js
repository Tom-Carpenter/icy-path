  
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import IntroBlog from './components/IntroBlog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Boulder from './components/images/boulder.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
         <NavBar />
         <div borderImage={Boulder}>
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
        </div>
      <Footer />
    </Router>
  );
}
export default App;