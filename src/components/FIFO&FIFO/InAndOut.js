import React, { useState, useEffect, Fragment } from "react";
import Stack from "./Stack";
import Queue from "./Queue";
import NewNode from "./LinkDiv";
import "./Link.css";
import MarioF from "./img/MarioF.svg";
import LuigiF from "./img/LuigiF.svg";
import Peach from "./img/Peach.svg";
import Toad from "./img/Toad.svg";
import Red from "./img/Red.svg";
import Green from "./img/Green.svg";
import Goomba from "./img/Goomba.svg";

const List = props => {
  const [FIFOLIFO, setFIFOLIFO] = useState("STACK");
  const [linked, setLinked] = useState(new Stack());
  const [picsList, setPicsList] = useState([]);
  useEffect(() => {
    if (!linked) {
      setLinked(new Stack());
    }
    setLinked(linked);
  }, [linked]);
  const randomPics = () => {
    let length = charactersPics.characters.length;
    let flag = true;
    let num = -1;
    if (picsList.length === length) return num;
    while (flag) {
      num = Math.floor(Math.random() * length);
      if (!picsList.includes(num)) {
        picsList.push(num);
        setPicsList(picsList);
        flag = false;
      }
    }

    return num;
  };
  const changeValue = () => {
    let random = randomPics();
    if (random === -1) return;
    linked.putIN("", random);
    setLinked(cloneLinked(linked));
  };

  const takeOut = () => {
    var index = picsList.indexOf(linked.flag.amount);
    if (index !== -1) picsList.splice(index, 1);
    linked.takeOut();
    setLinked(cloneLinked(linked));
  };
  const cloneLinked = linked => {
    var clone = Object.assign(
      Object.create(Object.getPrototypeOf(linked)),
      linked
    );
    return clone;
  };

  const creatNewNode = e => {
    if (linked === null) return;
    return listAllNode(linked.head, linked.flag);
  };

  const listAllNode = (flag, current) => {
    if (flag === null) return;
    if (flag.forwardNode === null) {
      return (
        <NewNode
          src={charactersPics.characters[flag.amount].src}
          name={charactersPics.characters[flag.amount].name}
          age={charactersPics.characters[flag.amount].age}
        />
      );
    } else {
      return (
        <Fragment>
          <NewNode
            src={charactersPics.characters[flag.amount].src}
            name={charactersPics.characters[flag.amount].name}
            age={charactersPics.characters[flag.amount].age}
          />
          {listAllNode(flag.forwardNode, current)}
        </Fragment>
      );
    }
  };
  const switchType = () => {
    if (FIFOLIFO === "STACK") {
      setLinked(new Queue());
      setFIFOLIFO("QUEUE");
    } else {
      setLinked(new Stack());
      setFIFOLIFO("STACK");
    }
    setPicsList([]);
  };

  return (
    <div>
      <div className="linkHead">
        <button
          className="switch"
          onClick={e => {
            switchType(e);
          }}
        >
          {FIFOLIFO === "STACK" ? "QUEUE" : "STACK"}
        </button>

        <h1> {FIFOLIFO}</h1>
        <div className="linkList1">
          <button
            className="submitLL"
            onClick={e => {
              changeValue(e);
            }}
          >
            Put In
          </button>

          <button
            className="submitLL"
            onClick={e => {
              takeOut(e);
            }}
          >
            Take Out
          </button>
        </div>
      </div>
      <div className="nodeList">
        <h3>Node List:</h3>
        {creatNewNode()}
      </div>
    </div>
  );
};
export default List;

const charactersPics = {
  characters: [
    { name: "Mario", age: "26", src: MarioF },
    { name: "Luigi", age: "25", src: LuigiF },
    { name: "Peach", age: "23", src: Peach },
    { name: "Toad", age: "18", src: Toad },
    { name: "Red Koopa Troopa", age: "15", src: Red },
    { name: "Green Koopa Troopa", age: "15", src: Green },
    { name: "Goomba", age: "12", src: Goomba }
  ]
};
