import styled from "styled-components";
const Wrapper = styled.div`
  margin: 1rem 0;

  h3 {
    margin-bottom: 0.8rem;
  }

  .add-comment {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  .add-comment textarea {
    background: inherit;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.darkGrey};
    color: ${(props) => props.theme.primaryColor};
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
  }

  .add-comment img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    margin-right: 1rem;
  }

  .comment {
    display: flex;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  .comment img {
    width: 40px;
    object-fit: cover;
    height: 40px;
    border-radius: 20px;
    position: relative;
    top: 2px;
    margin-right: 1rem;
  }

  .user-channel {
    font-weight: bold;
    color: white;
  }
`;

export default Wrapper;
