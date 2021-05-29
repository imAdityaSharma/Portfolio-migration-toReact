import React from "react";

import {Link} from "react-router-dom";
 export default function Header(params) {
     return (
     
        <nav className="navbar nav-tabs navbar-expand-lg navbar-dark bg-black1 active" role="tablist">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav IR">
                        <Link className=" nav-link HomeBtn nav-tabs tab-pane" to="/home">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                    <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="myprojects">My projects</Link>
                    </li>
          
                    <li className="nav-item">
                        <Link className="nav-link" to="blogs">Blogs</Link>
                    </li>
          
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/imAdityaSharma" target="_blank" rel="noreferrer noopener"><img className="img-thumbnail im1" src="./github.svg" width="25" height="25"className="img-icon" alt="..."/>    My GitHub </a>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle " to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Connect With Me
                    </Link>
                    <ul className="dropdown-menu bg-black1" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item bg-black1" href="https://www.facebook.com/profile.php?id=100005663714187" target="_blank" rel="noreferrer noopener"><img className="im2" src="/fb.svg" width="15" height="15"className="img-icon" alt="..."/> Facebook</a></li>
                        <li><a className="dropdown-item bg-black1" href="https://www.instagram.com/im_adisharma/" target="_blank" rel="noreferrer noopener"><img className="im2" src="/insta.svg" width="15" height="15"className="img-icon" alt="..."/>  Instagram</a></li>
                        <li><a className="dropdown-item bg-black1" href="https://twitter.com/im_adisharma" target="_blank" rel="noreferrer noopener"><img className="im2" src="/twt.svg"  width="15" height="15"className="img-icon" alt="..."/>  Twitter</a></li>
                        <li><a className="dropdown-item bg-black1" href="https://www.linkedin.com/in/Linkditya-sharma-95136716a/" target="_blank" rel="noreferrer noopener"><img className="im2" src="/ln.svg" width="15" height="15"className="img-icon" alt="..."/>  LinkedIn</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">My Resume</Link>
                </li>
            </ul>
        </div>
        <img className="img-thumbnail im1" src="/profile.png" width="60" height="60" alt="aditya sharma" />
        </div> 
    </nav>
    
     )
     
 }