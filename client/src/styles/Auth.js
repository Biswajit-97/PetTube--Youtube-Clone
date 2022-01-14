import styled from "styled-components";

const Button = styled.button`
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  position: relative;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: rgb(62, 166, 255);
  border-radius: 3px;
  border: 1px solid rgb(62, 166, 255);
  padding: 10px 15px;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Roboto, Helvetica, Arial, sans-serif;

  .outer {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .inner {
    display: inherit;
    margin-left: -4px;
    margin-right: 8px;
    font-size: 24px;
    white-space: nowrap;
  }
`;

export default Button;
