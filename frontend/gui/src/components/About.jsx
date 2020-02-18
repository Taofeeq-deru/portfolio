import React, { Component } from "react";
import { List, Progress } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    const { contact, skill } = this.props;

    return (
      <div className="container about">
        <div id="About">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1>ABOUT</h1>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOut="fadeOutLeft"
                duration={1}
              >
                <div className="info">
                  <img
                    src={`http://127.0.0.1:8000${contact.avatar}`}
                    alt="avatar"
                    className="avatar"
                  />
                  <h2>Who am I?</h2>
                  <p>{contact.about_me}</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6">
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOutRight"
                duration={1}
              >
                <div>
                  <List
                    dataSource={skill}
                    renderItem={(item) => (
                      <List.Item>
                        <b>{item.language}</b>{" "}
                        <Progress percent={item.skill_strength} />
                      </List.Item>
                    )}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
