import React from "react";
import "./log.css";
import {Link} from "react-router-dom"
export default function Log(){
    return(
        <div className="login-head">
            <center><table cellSpacing={50}>
                <tr>
                    <td>Username</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password"/></td>
                </tr>
            </table></center>
            <Link to= '/About'style={ {textDecoration: 'none'}}>
            <center><button className="btn3" type="button" >Submit</button></center>
            </Link>
        </div>
    );
}