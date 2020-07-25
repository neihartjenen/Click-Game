import React from "react";

function wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default wrapper;