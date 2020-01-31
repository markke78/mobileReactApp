import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NewNode = props => {
  const context = useContext(ThemeContext);
  let [fColor] = useState(context.fontColor);
  return (
    <div className="inNode" style={{ color: fColor }}>
      <span> Amount: {props.amount} </span>
      <span> subject: {props.subject} </span>
      {props.isFlag ? (
        <span>
          <button onClick={props.handleDeleteEvent}> Delete </button>
          <span className="flag"> Flag </span>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
export default NewNode;
