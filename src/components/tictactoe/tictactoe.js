import React, { Component } from "react";
import Box from "./box";
import marioO from "./marioO.png";
import luigiX from "./luigiX.png";
import tictactoebg1 from "./tictactoebg1.png";
class Tictactoe extends Component {
  constructor() {
    super();
    this.state = {
      boxes: Array(9).fill(null),
      history: [{ squares: Array(9).fill(null), nextPlayer: marioO }],
      operator: marioO
    };
  }

  handleBoxClickEvent = index => {
    const { boxes, history, operator } = this.state;
    if (boxes[index] !== null) return;
    if (this.calculateWinner()) {
      return;
    }
    let newBoxes = boxes.slice();
    newBoxes[index] = operator;
    let newOperator = operator === marioO ? luigiX : marioO;
    history.push({ squares: newBoxes, nextPlayer: newOperator });
    this.setState({
      boxes: newBoxes,
      history: history,
      operator: newOperator
    });
    return;
  };

  calculateWinner = () => {
    const { boxes } = this.state;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] !== null && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a] === marioO ? "Mario" : "Luigi";
      }
    }
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] === null) {
        return null;
      }
    }
    return "Tied";
  };

  timer = (record, index) => {
    let { history } = this.state;
    history.splice(index + 1, history.length - index);
    this.setState({
      boxes: record.squares,
      history: history,
      operator: record.nextPlayer
    });
  };

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status =
        "Next player: " + (this.state.operator === marioO ? "Mario" : "Luigi");
    }
    return (
      <div>
        <div className="status">
          {status}
          {/* {winner === "Tied" ? (
            <button
              onClick={() => {
                this.timer(this.state.history[0], 0);
              }}
            >
              Restart
            </button>
          ) : (
            ""
          )} */}
        </div>

        <div className="gameArea">
          <img className="gamePage" src={tictactoebg1} alt="innerBox"></img>
          <div className="board">
            {this.state.boxes.map((box, index) => {
              return (
                <Box
                  onBoxClick={() => {
                    this.handleBoxClickEvent(index);
                  }}
                  key={index}
                  id={index}
                  content={box}
                />
              );
            })}
          </div>
          <div className="historyBtn">
            {this.state.history.map((record, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    this.timer(record, index);
                  }}
                >
                  Go Back to step {index}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Tictactoe;
