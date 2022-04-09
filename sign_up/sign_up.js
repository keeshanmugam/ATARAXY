import React from "react";
import "./sign_up.css";
import {Link} from "react-router-dom"
export default function Sign_up(){
    return(
        <div className="Sign-head">
            <center><table cellSpacing={50}>
                <tr>
                    <td>First Name</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Email/Mobile</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password"/></td>
                </tr>
                 <tr>
                    <td>Confirm-Password</td>
                    <td><input type="password"/></td>
                </tr>
            </table></center>
            <Link to= '/About'style={ {textDecoration: 'none'}}>
            <center><button className="btn3" type="button" >Submit</button></center>
            </Link>
            
        </div>
    );
}