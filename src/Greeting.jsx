import "./App.scss";
import React from "react";
import PropTypes from "prop-types";

const Greeting = ({title}) => (
    <div className = "App">
      {title}
    </div>
  );

Greeting.propTypes = {
  title: PropTypes.string
};

Greeting.defaultProps = {
  title: "Holas"
};

export default Greeting;
