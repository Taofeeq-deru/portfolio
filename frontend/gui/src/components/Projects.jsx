import React, { Component } from "react";
import "./Projects.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div id="Projects">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1>PROJECTS</h1>
            </div>
          </div>
        </div>
        <div id="content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="All" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Django & React-JS" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Django" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="React-JS" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="JavaScript" key="5">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Projects;
