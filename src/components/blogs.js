import React from "react";
import { Link } from "react-router-dom";
 export default function BLOGS(params) {
     return (
     <div className="topContainer ">
        <div className="row1">
            <div2 className="list-group  ax ">
                <Link to="b1" className="list-group-item list-group-item-action bg-black" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">HTML</h5>
                            <small>3 days ago</small>
                            </div>
                    <p className="mb-1">info of html</p>
                    <small>history</small>
                </Link>
              <a to="#" className="list-group-item list-group-item-action bg-black">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in Link paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
              </a>
              <Link to="#" className="list-group-item list-group-item-action bg-black">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in Link paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
              </Link>
            </div2>
            </div>
            </div>
            
    )
     
}