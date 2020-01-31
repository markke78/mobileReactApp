import React from "react";

class MyIcon extends React.Component {
  render() {
    return (
      <img
        className="Icon Icon-logo"
        src={this.props.src}
        alt={this.props.name}
        onClick={this.props.onImageClick}
      />
    );
  }
}

export default MyIcon;
