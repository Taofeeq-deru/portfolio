import React, { Component } from "react";
import Typical from "react-typical";
import { Button } from "antd";
import avi from "../myAvatar.png";
import "./Intro.css";

class Introduction extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="Intro" id="Intro">
          <div className="Intro-header">
            <img src={avi} alt="logo" className="Intro-logo" />
            <h1>Hi, I'm Taofeeq Oluderu.</h1>
            <p>
              I'm{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "a fullstack developer 💻",
                  1000,
                  "a tech enthusiast 👩‍💻",
                  1000,
                  "a gamer 🎮",
                  1000,
                  "a football fan ⚽",
                  1000,
                  "a marvel fan 🎬",
                  1000,
                  "a starwars fan ✨",
                  1000,
                  "a music lover 🎶",
                  1000
                ]}
              />
            </p>
            <Button size="large" ghost>
              View my works
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Introduction;
