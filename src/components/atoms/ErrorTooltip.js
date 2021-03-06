import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledError = styled.p`
  color: #515050;
  text-transform: capitalize;
  background-color: rgba(200, 0, 0, 0.3);
  border: 0.1rem solid #515050;
  padding: 0.9rem 2.7rem;
  border-radius: 0.4rem;
`;

const ErrorTooltip = ({ message }) => (
  <>
    {!(message === "") && (
      <StyledError data-testid="error">{message}</StyledError>
    )}
  </>
);

export default ErrorTooltip;

ErrorTooltip.propTypes = {
  message: PropTypes.string.isRequired,
};
