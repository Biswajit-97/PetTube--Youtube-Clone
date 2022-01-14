import styled from "styled-components";

const Wrapper = styled.div`
  h4 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 1.2px;
    color: ${(props) => props.theme.secondaryColor};
    padding-left: 1.5rem;
  }

  .channel {
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
  }

  .channel:hover {
    cursor: pointer;
    background: ${(props) => props.theme.darkGrey};
  }

  .channel img {
    margin-right: 1rem;
    width: 22px;
    height: 22px;
    object-fit: cover;
    border-radius: 11px;
  }
`;

export default Wrapper;
