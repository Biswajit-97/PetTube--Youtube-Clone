import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.grey};
  z-index: 99;
  padding: 0.7rem 1.5rem;

  input {
    width: 500px;
  }

  .hamburger-icon {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    position: relative;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
  }

  ul {
    display: flex;
    align-items: center;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .hamburger-icon {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .hamburger-icon {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
    }
  }

  @media screen and (max-width: 400px) {
    li svg {
      display: none;
    }
  }
`;

export default Wrapper;
