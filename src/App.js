import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyIcon from "./components/MyIcon";
import icon from "./components/icon/icon.svg";
import star from "./components/icon/star.svg";
import money from "./components/icon/money.svg";
import link from "./components/icon/link.svg";
import tictactoe from "./components/icon/tictactoe.svg";
import context from "./components/icon/context.svg";
import Tictactoe from "./components/tictactoe/tictactoe";
import ReactAccount from "./components/account/account";
import Migrant from "./components/city/Migrant";
import LinkListHook from "./components/link/LinkListHook";
import Fire from "./components/icon/Fire.svg";
import InAndOut from "./components/FIFO&FIFO/InAndOut";
import { Theme } from "./components/context/ContextMain";
import { ThemeContext } from "./components/context/ThemeContext";

class App extends React.Component {
  static contextType = ThemeContext;
  constructor() {
    super();
    this.icons = [
      {
        src: icon,
        name: "Mario",
        heading: "React Starting Page",
        onImageClick: this.cityCommunity
      },
      {
        src: tictactoe,
        name: "Mario3",
        heading: "React Starting Page",
        onImageClick: this.startGame
      },
      {
        src: star,
        name: "Mario2",
        heading: "React Starting Page",
        onImageClick: this.goBack
      },
      {
        src: money,
        name: "Mario4",
        heading: "React Starting Page",
        onImageClick: this.myAccount
      },
      {
        src: link,
        name: "Mario5",
        heading: "React Starting Page",
        onImageClick: this.linkedList
      },
      {
        src: Fire,
        name: "Mario6",
        heading: "React Starting Page",
        onImageClick: this.inAndOut
      },
      {
        src: context,
        name: "Mario7",
        heading: "React Starting Page",
        onImageClick: this.myContext
      }
    ];
    this.sences = {
      startPage: (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      ),
      gamePage: (
        <div>
          <Tictactoe />
        </div>
      ),
      accountPage: (
        <div className="accountHead">
          <h1>Welcome to Super Mario Bank</h1>
          <ReactAccount />
        </div>
      ),
      cityCommunity: (
        <div>
          <div className="marioWorld">
            <h1>Welcome to Super Mario World</h1>
          </div>
          <Migrant />
        </div>
      ),
      linkedList: (
        <div>
          <LinkListHook />
        </div>
      ),
      inAndOut: (
        <div>
          <InAndOut />
        </div>
      ),
      myContext: (
        <div>
          <Theme />
        </div>
      )
    };
    this.state = { sences: this.sences.startPage };
  }

  startGame = () => {
    this.setState({ sences: this.sences.gamePage });
  };

  myAccount = () => {
    this.setState({ sences: this.sences.accountPage });
  };

  goBack = () => {
    this.setState({ sences: this.sences.startPage });
  };

  cityCommunity = () => {
    this.setState({ sences: this.sences.cityCommunity });
  };

  linkedList = () => {
    this.setState({ sences: this.sences.linkedList });
  };

  inAndOut = () => {
    this.setState({ sences: this.sences.inAndOut });
  };

  myContext = () => {
    this.setState({ sences: this.sences.myContext });
  };

  render() {
    console.log(this.context);
    return (
      <div className="App">
        <div className="iconArea">
          {this.icons.map(item => (
            <MyIcon
              src={item.src}
              name={item.name}
              key={item.name}
              onImageClick={item.onImageClick}
            />
          ))}
        </div>

        <header className="App-header">{this.state.sences}</header>
        <div
          className="bg"
          style={{ backgroundImage: "url(" + this.context.bgPic + ")" }}
        >
          {/* <img src= {smb}/> */}
        </div>
      </div>
    );
  }
}

export default App;
