import Header from './components/Header';
import Footer from './components/Footer';
import BLOGS  from "./components/blogs";
import FEEDBACK  from "./components/feedback";
import './App.css';
import {Router as RT} from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
     <Header/>
          <Switch>
            <Route exact path="/home">
               <home />
            </Route>
            <Route exact path="/myprojects">
              <myprojects/>
            </Route>
            <Route exact path="/blogs">
               <BLOGS/>
          </Route>
          <Route exact path="/resume">
            <resume/>
          </Route>
          <Route exact path="/feedback">
               <FEEDBACK/>
               
            </Route>
        </Switch>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
