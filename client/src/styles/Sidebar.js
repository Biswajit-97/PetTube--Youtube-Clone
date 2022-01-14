import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 55px;
  left: 0;
  height: 100vh;
  width: 240px;
  background: ${(props) => props.theme.grey};
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  font-size: 1rem;

  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
  }

  .icon:not(.hover-disable):hover {
    background: ${(props) => props.theme.darkGrey};
    cursor: pointer;
  }

  .active div {
    background: ${(props) => props.theme.darkGrey};
    cursor: pointer;
  }

  .active svg {
    fill: #fff;
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }

  .icon svg {
    height: 30px;
    width: 30px;
  }

  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;
export default Wrapper;
