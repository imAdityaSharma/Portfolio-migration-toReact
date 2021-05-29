import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Footer(params) {

     return (  
        <Router>
        <div className="foot">
     <nav className="navbar navbar-expand-lg navbar-dark bg-black1">
         <div className="container-fluid navbar-nav">
               <Link className="nav-link" to="#">Home</Link>
               <Link className="nav-link" to="#">xyz</Link>
               <Link className="nav-link" to="#">xyz</Link>
               <Link className="nav-link" to="Feedback">feedback</Link>
               <li className="nav-item">made with love</li><li className="xx">❤</li>
               <li className="nav-item">using <a className="vc" href="https://reactjs.org/" rel="noreferrer"target="_blank"> React</a></li>
               <a className="vcc" href="https://www.vectorstock.com/royalty-free-vector/Linkbstract-background-for-use-in-design-vector-30182387" rel="noreferrer" target="_blank">Vector image by VectorStock / Robot</a>
           </div>
       </nav>
     </div>  
     <Switch>
     <Route exact path="/Feedback">
       <feedback />
     </Route>
     <Route exact path="/xyz">
       <myprojects/>
     </Route>
     <Route path="/blogs">
       <blogs/>
     </Route>
     <Route path="/resume">
       <resume/>
     </Route>
   </Switch>
   </Router>
 )
     
 }