import React from "react";
import { Modal, Button, Carousel } from "antd";

class ModalClass extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        <Button size="large" onClick={this.showModal}>
          View Details
        </Button>
        <Modal
          title={null}
          centered
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Carousel autoplay effect="fade">
            <img
              src={`http://127.0.0.1:8000${item.image_1}`}
              alt="project"
              className="img-fluid"
            />
            <img
              src={`http://127.0.0.1:8000${item.image_2}`}
              alt="project"
              className="img-fluid"
            />
            <img
              src={`http://127.0.0.1:8000${item.image_3}`}
              alt="project"
              className="img-fluid"
            />
          </Carousel>
          <h3>
            {item.name}
            <span>
              <br />
              <em style={{ fontSize: "16px", fontWeight: "normal" }}>
                {item.display_skills}
              </em>
            </span>
          </h3>
          <p>{item.about_project}</p>
          <a
            href={item.project_url}
            target="project"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <Button size="large">View Project</Button>
          </a>
          <a href={item.repo_url} target="project" rel="noopener noreferrer">
            <Button size="large">View Repo</Button>
          </a>
        </Modal>
      </div>
    );
  }
}

export default ModalClass;
