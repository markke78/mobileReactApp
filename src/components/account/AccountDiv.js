import React, { Component } from "react";
class AccountDiv extends Component {
  state = {};
  render() {
    return (
      <div className="acc">
        <h5>Account Type:{this.props.accountType}</h5>
        <h4>Your Balance:{this.props.balance}</h4>
        <button className="money remove" onClick={this.props.removeAccount}>
          Remove
        </button>
      </div>
    );
  }
}

export default AccountDiv;
