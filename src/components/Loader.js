import React from "react";
import Loader from "react-loader-spinner";
import "styles/loader.css";
import PropTypes from "prop-types";
export default function LoaderSpinner(props) {
  return (
    <div className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      <p className="loader__text">{props.text}</p>
    </div>
  );
}

LoaderSpinner.propTypes = {
  text: PropTypes.string.isRequired,
};
