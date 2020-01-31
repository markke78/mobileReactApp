import React, { Component } from "react";
class Box extends Component {
  state = {};
  render() {
    return (
      <div onClick={this.props.onBoxClick} id={this.props.id} className="box">
        <img src={this.props.content} className="OX" alt=""></img>
      </div>
    );
  }
}

export default Box;
