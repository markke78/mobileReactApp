import React from "react";
const NewNode = props => {
  return (
    <div className="inNode1">
      <span> Name: {props.name} </span>
      <span> Age: {props.age} </span>
      <img className="linkPics" src={props.src} alt="" />
    </div>
  );
};
export default NewNode;
