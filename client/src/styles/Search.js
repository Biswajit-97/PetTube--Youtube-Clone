import styled from "styled-components";

const Wrapper = styled.div`
  input#search {
    background: ${(props) => props.theme.black};
    padding: 0.4rem 1rem;
    border: 1px solid ${(props) => props.theme.darkGrey};
    height: 31px;
    color: ${(props) => props.theme.primaryColor};
  }

  form {
    display: flex;
  }

  button {
    width: 65px;
    background-color: ${(props) => props.theme.darkGrey};
    border-radius: 0 2px 2px 0;
    border: 1px solid ${(props) => props.theme.darkGrey};
  }

  button svg {
    pointer-events: none;
    display: block;
    width: 100%;
    height: 24px;
    color: fff;
    opacity: 0.6;
  }

  @media screen and (max-width: 750px) {
    input#search,
    button {
      display: none;
    }
  }
`;

export default Wrapper;
