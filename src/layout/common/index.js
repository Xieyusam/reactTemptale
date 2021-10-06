import React, { Component } from 'react';
import './index.less';

class Common extends Component {
  render() {
    return (
      <div className="Common">
        {this.props.children}
      </div>
    );
  }
}

export default Common;