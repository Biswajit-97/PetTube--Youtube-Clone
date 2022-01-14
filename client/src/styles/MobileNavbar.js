import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.grey};
  border-top: 1px solid ${(props) => props.theme.darkGrey};
  display: none;
  padding: 0.8rem 1rem;

  .icons a {
    padding: 0;
    margin: 0;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.darkGrey};
  }

  .icons img {
    width: 26px;
    height: 26px;
    object-fit: cover;
    border-radius: 13px;
  }

  .active svg {
    fill: ${(props) => props.theme.primaryColor};
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export default Wrapper;
