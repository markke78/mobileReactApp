import React, { useState, useEffect, useRef, Fragment } from "react";
import LinkedList from "./LinkList";
import NewNode from "./LinkDiv";
import "./Link.css";

const List = props => {
  const [linked, setLinked] = useState(new LinkedList());
  const subjectName = useRef(null);
  const amount = useRef(null);
  useEffect(() => {
    if (!linked) {
      setLinked(new LinkedList());
    }
    // while use setLinked outside useEffect, if the value is different, it will trigger this function
    // and update the page
    setLinked(linked);
  }, [linked]);
  const changeValue = () => {
    linked.insert(subjectName.current.value, amount.current.value);
    setLinked(cloneLinked(linked));
  };
  const next = () => {
    linked.next();
    setLinked(cloneLinked(linked));
  };
  const previous = () => {
    linked.previous();
    setLinked(cloneLinked(linked));
  };
  const last = () => {
    linked.last();
    setLinked(cloneLinked(linked));
  };
  const first = () => {
    linked.first();
    setLinked(cloneLinked(linked));
  };
  const handleDeleteEvent = () => {
    linked.delete();
    setLinked(cloneLinked(linked));
  };
  const cloneLinked = linked => {
    //clone hole class instance, let react know something is different and have to update page
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
  //the flag is head now, but it will be changed to next flag.
  const listAllNode = (flag, current) => {
    if (flag === null) return;
    if (flag.forwardNode === null) {
      return (
        <NewNode
          amount={flag.amount}
          subject={flag.subject}
          handleDeleteEvent={handleDeleteEvent}
          isFlag={flag === current ? true : false}
        />
      );
    } else {
      return (
        <Fragment>
          <NewNode
            amount={flag.amount}
            subject={flag.subject}
            handleDeleteEvent={handleDeleteEvent}
            isFlag={flag === current ? true : false}
          />
          {listAllNode(flag.forwardNode, current)}
        </Fragment>
      );
    }
  };
  return (
    <div>
      <div className="linkHead">
        <h1>Linked List</h1>
        <div className="linkList1">
          Subject Name:
          <input type="text" ref={subjectName} />
          Number:
          <input type="number" ref={amount} />
          <button
            className="submitLL"
            onClick={e => {
              changeValue(e);
            }}
          >
            Submit
          </button>
          <button
            className="submitLL"
            onClick={e => {
              first(e);
            }}
          >
            First
          </button>
          <button
            className="submitLL"
            onClick={e => {
              last(e);
            }}
          >
            Last
          </button>
          <button
            disabled={linked.flag === linked.head ? true : false}
            className="submitLL"
            onClick={e => {
              previous(e);
            }}
          >
            Previous
          </button>
          <button
            disabled={
              linked.flag === null || linked.flag.forwardNode === null
                ? true
                : false
            }
            className="submitLL"
            onClick={e => {
              next(e);
            }}
          >
            Next
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
