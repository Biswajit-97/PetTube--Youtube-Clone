// @ts-nocheck
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 10px 16px;
  font-family: ${(props) => props.font};
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.red};
  border-radius: 1px;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  letter-spacing: 0.02857em;

  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 5px 8px;
  }

  ${(props) =>
    props.grey &&
    css`
      background: ${(props) => props.theme.darkGrey};
      border: 1px solid ${(props) => props.theme.darkGrey};
      color: ${(props) => props.theme.secondaryColor};
    `}
`;

export default Button;
