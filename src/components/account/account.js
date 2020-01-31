import React, { Component } from "react";
import "../App.css";
import { AccountController } from "../functions";
import AccountDiv from "./AccountDiv";

class ReactAccount extends Component {
  state = { controller: new AccountController() };
  addAccount = () => {
    let { controller } = this.state;
    let newAccount = controller.addAccount(
      this.leftAccountList.value,
      0,
      this.leftAccountList.options[this.leftAccountList.selectedIndex].text
    );
    if (newAccount) {
      this.setState({ controller: controller });
    }
  };

  operateAccount = operator => {
    let { controller } = this.state;
    controller.accountOperation(
      this.rightAccoutList.value,
      parseFloat(this.amount.value),
      operator
    );
    this.setState({ controller: controller });
  };

  getHeighest = () => {
    let { controller } = this.state;
    let height = controller.heighestValue();
    return height[0] + "$" + height[1];
  };

  getLowest = () => {
    let { controller } = this.state;
    let lowt = controller.lowestValue();
    return lowt[0] + " $" + lowt[1];
  };

  handleRemoveAccount = accountName => {
    let { controller } = this.state;
    controller.removeAccount(accountName);
    this.setState({ controller: controller });
  };

  render() {
    let { controller } = this.state;
    return (
      <div className="container">
        <div className="split left" id="left">
          <h3>Add Account</h3>
          <h5 className="leftInput">Account Type:</h5>
          <form>
            <select
              ref={select => {
                this.leftAccountList = select;
              }}
            >
              <option value="checking">Checking Account</option>

              <option value="saving">Saving Account</option>

              <option value="rrsp">RRSP</option>

              <option value="tfsa">TFSA</option>
            </select>
          </form>
          <button className="money money5" onClick={this.addAccount}>
            Add
          </button>
          <div className="leftArea">
            <h3>Account Summary</h3>
            <h5>
              Total of Your Account:${this.state.controller.totalBalance()}{" "}
            </h5>
            <h5>Hightest Value Account:{this.getHeighest()}</h5>
            <h5>Lowest Value Account:{this.getLowest()}</h5>
          </div>
        </div>
        <div id="accArea" className="split right">
          <h3>Account Information</h3>

          <button
            className="money"
            onClick={() => this.operateAccount("deposit")}
          >
            Deposit
          </button>
          <button
            className="money money2"
            onClick={() => this.operateAccount("withdraw")}
          >
            Withdraw
          </button>

          <br />
          <input
            type="text"
            ref={input => {
              this.amount = input;
            }}
          />
          <form>
            <select
              ref={select => {
                this.rightAccoutList = select;
              }}
            >
              {controller.userAccounts.map((account, index) => {
                return (
                  <option key={index} value={account.accountName}>
                    {account.accountType}
                  </option>
                );
              })}
              }
            </select>
          </form>
          {controller.userAccounts.map((account, index) => {
            return (
              <AccountDiv
                key={index}
                accountType={account.accountType}
                balance={account.balance}
                removeAccount={() =>
                  this.handleRemoveAccount(account.accountName)
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReactAccount;
