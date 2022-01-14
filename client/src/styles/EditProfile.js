import styled from "styled-components";

const Wrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    fill: ${(props) => props.theme.darkGrey};
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 440px) {
    margin-top: 1rem;
  }
`;

export default Wrapper;
