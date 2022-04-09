import React from "react";
import "./Music.css";
import img1 from "./music2.jpg";
import img2 from "./music3.jpg";
import img3 from "./music4.jpg";
import img4 from "./music5.jpg";
import img5 from "./music6.jpg";
import img6 from "./music7.jpg";
export default function Music(){
    return(
        <div className="Music_head">
            <h1>MUSIC</h1>
            <h2> Music can heal the wounds, that medicine cannot touch!!</h2>
            <center>
            <table>
                <tr>
                    <td> <a href="https://youtu.be/eAaPVHmO2ZA"><img src= { img1 } /></a>
                    <center><h3>Stillness</h3></center> 
                    </td>
                    <td> <a href="https://youtu.be/CZjH7o1MGVU"><img src={img2}/> </a>
                    <center><h3>Sleep and Relaxation</h3></center>
                    </td>
                    <td> <a href="https://youtu.be/p-aFWl27TCM"><img src={img3}/> </a>
                    <center><h3>Meditation Music for Anxiety</h3></center>
                    </td>
                    
                </tr>
                <tr>
                    <td> <a href="https://youtu.be/0CYm6Gj_Qmw"><img src={img4}/> </a>
                    <center><h3>Healing Music</h3></center>
                    </td>
                    <td><a href="https://youtu.be/nUfCZtaDiH8"><img src={img5}/> </a>
                    <center><h3>Nature Sounds</h3></center>  
                    </td>
                    <td><a href="https://youtu.be/4DFkifNixWE"><img src={img6}/> </a>
                    <center><h3>Peaceful Music</h3></center>
                    </td>
                </tr>
            </table>
            </center>   
        </div>
    );
}