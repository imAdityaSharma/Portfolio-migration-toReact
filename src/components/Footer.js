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
               <Link className="nav-link" to="feedback">feedback</Link>
               <li className="nav-item">made with love❤</li>
               <li className="nav-item">using <Link className="vc" to="https://www.djangoproject.com/" target="_blank"> Django</Link></li>
               <Link className="vcc" to="https://www.vectorstock.com/royalty-free-vector/Linkbstract-background-for-use-in-design-vector-30182387" target="_blank">Vector image by VectorStock / Robot</Link>
           </div>
       </nav>
     </div>  
     <Switch>
     <Route exact path="/feedback">
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