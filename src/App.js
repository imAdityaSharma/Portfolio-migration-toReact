import Header from './components/Header';
import Footer from './components/Footer';
import BLOGS  from "./components/blogs";
import FEEDBACK  from "./components/Feedback";
import Home  from "./components/home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
     <Header/>
          <Switch>
           <Route exact path="/home" ><Home/></Route>
           <Route exact path="/" ><Home/></Route>
            {/*//<Route exact path="/myprojects"><myprojects/></Route>}*/}
            <Route exact path="/blogs">
               <BLOGS/>
          </Route>
          {/*//<Route exact path="/resume"><resume/></Route>}*/}
          <Route exact path="/Feedback">
               <FEEDBACK/>
               
            </Route>
        </Switch>
    </Router>
    <Footer/>
    
    </>
  );
}

export default App;
