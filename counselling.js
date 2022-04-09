import React from "react";
import "./counselling.css";
import VideoPlayer from 'react-video-js-player';
import Counsel1 from "./counsel1.mp4";
import Counsel2 from "./counsel2.mp4";
const  VideoJS = () => {
    const videoSrc1 = Counsel1;
    const poster1 ="https://i.ytimg.com/vi/Joski1vAMLo/maxresdefault.jpg";
    const videoSrc2 = Counsel2;
    const poster2="https://i.ytimg.com/vi/QXrYRQUpBJs/mqdefault.jpg";

    return(
        <div className="App1">
            <h1>Counselling</h1>
            <VideoPlayer 
                src={videoSrc1} 
                poster={poster1} 
                width="620" 
                height="320"
                playbackRates={[0.5,1,3.85,16]}/>
            <br/>
            <VideoPlayer 
                src={videoSrc2} 
                poster={poster2} 
                width="620" 
                height="320"
                playbackRates={[0.5,1,3.85,16]}/>
            <br/>
        </div>
    );
};
export default VideoJS;