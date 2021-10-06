import React, { Component } from "react";
import { Row, Col } from "antd";
import "./index.less";
import NavLeft from "../../components/NavLeft";
import Header from "../../components/Header";

class Admin extends Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={4} className="nav-left">
            <NavLeft></NavLeft>
          </Col>
          <Col span={20} className="main">
            <Header></Header>
            {/* <Spin spinning={this.state.loading}> */}
              <Row className="content">
                <div className="content_inner">{this.props.children}</div>
              </Row>
            {/* </Spin> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
