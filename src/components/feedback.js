import React from "react";

import Link from "react-router-dom";
 export default function FEEDBACK(params) {
     return (

    <div className="form-cc" >
        <h1 className="text-center"> feedback</h1>
        <form method="POST" action="/feedback">
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="   "/>
            </div>
            
            <div className="form-group">
                <label htmlFor="feedback" className="form-label">Enter your query</label>
                <textarea className="form-control" id="feedback" name="feedback" rows="3"></textarea></div>
                
            <button className="btn btn-primary" type="submit">submit</button>
            </form>
    </div>

    )
    }