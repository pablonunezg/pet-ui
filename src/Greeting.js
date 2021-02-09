/* eslint-disable no-console */

import "./App.scss";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

function Greeting ({title}) {
  console.log("asas");
  return (<>
    <div className = "App">
      {title}
    </div>
  
    <Button type="primary" onClick = {()=>console.log("asas")}>Button</Button>
  </>
  );
}

Greeting.propTypes = {
  title: PropTypes.string
};

Greeting.defaultProps = {
  title: "Holas"
};

export default Greeting;
