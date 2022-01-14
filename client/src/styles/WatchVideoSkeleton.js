import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 2rem;
  padding: 1.75rem;

  .avatar-card {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  .avatar {
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }

  .video {
    height: 340px;
  }

  .related-videos img {
    height: 140px;
  }

  .related-videos div {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
    .related-videos {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .video {
      height: 250px;
    }
  }

  @media screen and (max-width: 400px) {
    .avatar-card {
      margin-top: 3rem;
    }

    .avatar {
      height: 70px;
      width: 70px;
      border-radius: 35px;
      position: relative;
      top: -5px;
    }
  }
`;

export default Wrapper;
