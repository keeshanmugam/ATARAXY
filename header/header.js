import React from "react";
import "./header.css";
import {Link} from "react-router-dom"
export default function Header() 
{
    return (
    <div className="header">
      <div className="header-left">
        <h1  className="head">ATARAXY</h1>
        <p className="header-pre">The Natural Therapist <br /></p>
        <Link to= '/login'style={ {textDecoration: 'none'}}>
        <button className="btn" type="button">LET'S GET STARTED!</button>
        </Link>
        
      </div>
      <div className="header-right">
      </div>
    </div>
    )
}
