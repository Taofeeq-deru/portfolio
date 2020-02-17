import React from "react";
import axios from "axios";
import { Affix } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Nav from "../components/Nav";
import Introduction from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";

class MainLayaout extends React.Component {
  state = {
    top: 0,
    bottom: 10,
    contact: "",
    skill: ""
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        contact: res.data.contact[0],
        skill: res.data.skill
      });
      console.log(this.state.contact.avatar);
    });
  }

  render() {
    return (
      <div>
        <Introduction />
        <Affix offsetTop={this.state.top}>
          <Nav
            onClick={() => {
              this.setState({
                top: this.state.top + 10
              });
            }}
          />
        </Affix>
        <div style={{ backgroundColor: "#e9e9e9" }}>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutRight"
            duration="2"
          >
            <About contact={this.state.contact} skill={this.state.skill} />
          </ScrollAnimation>
        </div>
        <div style={{ backgroundColor: "#ffffff" }}>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOut="fadeOutLeft"
            duration="2"
          >
            <Projects />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default MainLayaout;
