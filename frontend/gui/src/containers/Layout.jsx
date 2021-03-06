import React from "react";
import axios from "axios";
import { Affix, BackTop } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import Nav from "../components/Nav";
import Introduction from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

class MainLayaout extends React.Component {
  state = {
    top: 0,
    bottom: 10,
    contact: "",
    skill: "",
    project: ""
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        contact: res.data.contact[0],
        skill: res.data.skill,
        project: res.data.project
      });
    });
  }

  render() {
    return (
      <div>
        <BackTop />
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
          <About contact={this.state.contact} skill={this.state.skill} />
        </div>
        <div style={{ backgroundColor: "#ffffff" }}>
          <Projects project={this.state.project} />
        </div>
        <div style={{ backgroundColor: "#333846" }}>
          <Contact contact={this.state.contact} />
        </div>
      </div>
    );
  }
}

export default MainLayaout;
