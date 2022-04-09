import React from 'react'
import "./nav.css"
import {Link} from "react-router-dom"
const nav = () =>{
    return(
    <nav className="header-nav">
        <nav className="nav-content">
           <Link to='/header' style={ {textDecoration: 'none'}}>
           <h4 className="header_button">Home</h4>
           </Link>
           <Link to='/About' style={ {textDecoration: 'none'}}> 
           <h4 className="header_button">About</h4>
           </Link> 
           <Link to= '/aromatherapy'style={ {textDecoration: 'none'}} >
           <h4 className="header_button"> Aromatherapy</h4>
           </Link>
           <Link to= '/Music' style={ {textDecoration: 'none'}} >
           <h4 className="header_button"> Music</h4>
           </Link>
           <Link to= '/exercise'style={ {textDecoration: 'none'}}>
           <h4 className="header_button"> Exercise</h4>
           </Link>
           <Link to= '/counselling' style={{textDecoration: 'none'}}>
           <h4 className="header_button"> Counselling</h4>
           </Link>
           {/* <Link to= '/login'style={ {textDecoration: 'none'}}>
           <h4 className="header_button"> Login</h4>
           </Link> */}
           
        </nav>
    </nav>
    )
}
export default nav;