import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid #e73d34;
  min-width: 200px;
  width: 100%;
  color: #515050;
  background-color: transparent;
  min-height: 3rem;
  margin: 1rem 0;
  @media (min-width: 375px) {
    min-width: 270px;
  }
  @media (min-height: 800px) {
    min-height: 5rem;
  }
`;

const Input = ({ changeHandler, name, value, placeholder, ...props }) => (
  <>
    <label className="sr-only" htmlFor={name}>
      {placeholder}
    </label>
    <StyledInput
      id={name}
      name={name}
      value={value}
      onChange={changeHandler}
      {...props}
      autocomplete="false"
      placeholder={placeholder}
    />
  </>
);

export default Input;

Input.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
