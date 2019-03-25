import React from "react";
import PropTypes from "prop-types";

const InputField = ({ handleChange, title, value }) => (
  <div>
    <br />
    {title}
    <br />
    <input
      type="text"
      value={value}
      onChange={event => handleChange(event.target.value)}
    />
  </div>
);

InputField.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string
};

InputField.defaultProps = {
  handleChange: event => console.info(`New value : ${event.target.value}`),
  title: null,
  value: null
};

export default InputField;
