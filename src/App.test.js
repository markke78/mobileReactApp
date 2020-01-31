import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactAccount from "./components/account/account";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReactAccount />, div);
});
