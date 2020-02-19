import React, { Component } from "react";
import ModalClass from "./Modal";
import { List, Card, Popover } from "antd";

class ListClass extends Component {
  state = {};
  render() {
    const { language, identity } = this.props;
    return (
      <List
        grid={{
          gutter: 0,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3
        }}
        dataSource={language}
        renderItem={(item) => (
          <List.Item id={`image${item.id}${identity}`}>
            <Popover
              content={
                <div>
                  <em style={{ color: "#282c34" }}>{item.display_skills}</em>
                  <br />
                  <br />
                  <ModalClass item={item} />
                </div>
              }
              title={item.name}
              getPopupContainer={() =>
                document.querySelector(`#image${item.id}${identity}`)
              }
              placement="rightBottom"
              centered
            >
              <Card
                hoverable
                cover={
                  <img
                    src={`http://127.0.0.1:8000${item.image_1}`}
                    alt="project"
                    className="img-fluid"
                    style={{
                      height: "45vmin"
                    }}
                  />
                }
                bodyStyle={{ display: "none" }}
                style={{
                  height: "45vmin",
                  borderRadius: "none",
                  border: "none"
                }}
              />
            </Popover>
          </List.Item>
        )}
      />
    );
  }
}

export default ListClass;
