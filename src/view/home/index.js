import React, { Component } from "react";
import "./index.less";
import { Button } from 'antd';

class Home extends Component {
  render() {
    return <div className="Home">
      <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    
    
    </div>;
  }
}

export default Home;
