import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext.js";
import smb from "../../image/smb.png";
import smb1 from "../../image/smb1.png";

class Theme extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h2>Welcome to Word Controller</h2>
        <div className="listContent">
          <br></br>
          <label className="lbllist">
            Select Font Color:
            <select
              value={this.context.fontColor}
              onChange={this.context.setFontColor}
            >
              <option value="Default">Black(Default)</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
            </select>
          </label>
          <br></br>
          <br></br>

          <label className="lbllist">
            Select Background:
            <select value={this.context.bgPic} onChange={this.context.setBgPic}>
              <option value={smb}>pic1(Default)</option>
              <option value={smb1}>pic2</option>
            </select>
          </label>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export { Theme };
