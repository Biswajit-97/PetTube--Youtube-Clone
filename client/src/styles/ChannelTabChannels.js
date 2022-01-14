import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  img {
    width: 106px;
    height: 106px;
    border-radius: 53px;
    margin-bottom: 0.8rem;
    object-fit: cover;
  }

  .channel {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Wrapper;
