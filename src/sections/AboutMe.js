import React, { forwardRef } from "react";
import Restaurant from "../images/restaurant.jpg";
import "./AboutMe.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className="about-me-container" ref={ref}>
      <h1>About me</h1>
      <div className="about-me-story">
        <h2>A distinct cultural background</h2>
        <p>
          Growing up I have been continually exposed to a range of cultures, having grown up in
          Hong Kong as well as being half Japanese and half Canadian. Thanks to my upbringing I speak
          Japanese, English and French fluently, and I have a very open mind towards other cultures.{" "}
        </p>
      </div>
      <div className="about-me-story">
        <h2>A passion for sports</h2>
        <p>
          When I was 6, I joined a soccer team in Hong Kong with my friends and played several times
          a week as well as in competitions. After 5 years I grew a little tired of the stress that 
          comes with competition and started practicing soccer more casually, as well as picking up
          other sports. Currently I regularly play ping pong and basketball, as well as a little 
          volleyball and squash from time to time.
        </p>
      </div>
    </div>
  );
});

export default AboutMe;
