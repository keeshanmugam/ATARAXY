import React from "react";
import "./exercise.css";
import img1 from "./breathe.gif";
import img2 from "./ex 1.gif";
import img3 from "./ex 2.gif";
import img4 from "./ex3.gif";
import img5 from "./m1.gif";
export default function Exercise(){
    return(
        <div className="ex-head">
            <h1>EXERCISE FOR STRESS & ANXIETY RELIEF</h1>
            <h2>1.BREATHING EXERCISE</h2>
            <img src={img1}/>
            <h3> Square breathing exercises for anxiety </h3>
            <ul>
                <li>Square breathing helps regulate the amount of oxygen and carbon dioxide in our bodies,
              which can often be out of balance when anxiety is at play.</li>
                <li>Square breathing involves breathing in, holding the breath, 
              exhaling and holding it again — all for four counts apiece.</li>
                <li>Repeat the cycle for several minutes. This anxiety relief exercise 
                promotes relaxation and leads to clearer thoughts, helping to reset emotional peaks.</li>
            </ul>
            <br/><br/><br/>
            <h2>2.PROGRESSIVE MUSCLE RELAXATION</h2>
            <center><table>
                <tr>
                    <td><img src={img2}/></td>
                    <td><img src={img3}/></td>
                    <td> <img src={img4}/></td>
                </tr>
            </table>
            </center>
            <ul>
            <li>
            Anxiety often manifests itself physically in our bodies. One common physical reaction to 
            anxiety is muscle tension. When we begin to experience anxiety, our bodies can stay tense without 
            us even realizing it. Ironically, our brain then perceives this tension and treats it as a warning 
            sign that there is reason to be worried, and the anxiety alarm starts to sound. It is a vicious 
            cycle.
            </li>
            <li>
            Progressive muscle relaxation seeks to help your brain recognize what it feels like for your
            muscles to be in a relaxed, tension-free state. To initiate PMR, get comfortable in a seated 
            position. Starting at the tips of your toes and working your way up, flex each major muscle group 
            for a count of 10 seconds, then release for a count of 10 seconds. Move on to the next group of 
            muscles, flexing for 10 seconds, then releasing for 10 seconds.
            </li>
            <li>
            This anxiety relief exercise helps remind the body of the difference between tension and relaxation, 
            which can help the brain identify and remedy a tense situation. As this unconscious tension tends 
            to trip the anxiety alarm, keeping muscles relaxed as much as possible is an important tool that 
            can combat ongoing anxiety.
            </li>
            </ul>
            <h2>3.MINDFULLNESS EXERCISE FOR ANXIETY RELIEF</h2>
            <img src={img5}/>
            <ul>
                <li>The art of living in the moment, mindfulness seeks to bring a person fully into the present
                by engaging all five senses. So much of our time, after all, is spent focusing on the past or 
                future, or simply going about our busy lives without thinking twice.
                </li>
                <li>Mindfulness can be practiced anywhere and applied to any activity. Consider the process of
                taking a shower: Most of us just go through a pattern of steps, rushing through the routine to
                move forward with our day. A mindful shower would involve paying attention to the smell of your 
                soap, the feel of the warm water on your different body parts, the sound of the water hitting 
                your back and the steam enveloping the bathroom, for example.
                </li>
                <li>
                By observing things in real time and being aware, we can calm the part of the logical mind 
                fixated on what comes next. This helps us appreciate things more and reduces stress and worry.
                </li>
            </ul>
            <br/><br/><br/><br/>
            <h2>FITNESS TIPS TO STAY HEALTHY & MANAGE STRESS</h2>
            <p>The most recent federal guidelines for adults recommend at least 2½ hours of moderate-intensity
            physical activity (e.g. brisk walking) each week, 1¼ hours of a vigorous-intensity activity 
            (such as jogging or swimming laps), or a combination of the two.</p>
            <p>If you have an exercise program already, keep up the good work. If not, here are tips to get
            you started.</p>
            <ul>
                <li>5 X 30: Jog, walk, bike, or dance three to five times a week for 30 minutes.</li>
                <li>Set small daily goals and aim for daily consistency rather than perfect workouts. 
                It's better to walk every day for 15-20 minutes than to wait until the weekend for 
                a three-hour fitness marathon. Lots of scientific data suggests that frequency is
                most important.  </li>
                <li>Find forms of exercise that are fun or enjoyable. Extroverted people often like classes 
                and group activities. People who are more introverted often prefer solo pursuits.</li>
                <li>Distract yourself with an iPod or other portable media player to download audiobooks, 
                podcasts, or music. Many people find it’s more fun to exercise while listening to something 
                they enjoy.</li>
                <li>
                Recruit an “exercise buddy.” It's often easier to stick to your exercise routine when you have 
                to stay committed to a friend, partner, or colleague.
                </li>
                <li>Be patient when you start a new exercise program. Most sedentary people require about four
                 to eight weeks to feel coordinated and sufficiently in shape so that exercise feels easier.</li>
            </ul>
        </div>
        );
}