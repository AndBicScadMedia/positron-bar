import React, {Component, PropTypes} from 'react';

export default class SysInfo extends Component {
  render() {
    return <div className={`sysinfo ${this.props.className}`}>{this.props.children}</div>;
  }
}
