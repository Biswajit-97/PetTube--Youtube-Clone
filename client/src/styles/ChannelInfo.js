import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  .avatar-channel {
    display: flex;
    align-items: center;
  }

  .channel-info-meta {
    line-height: 1.5;
  }

  .subscribe-channel {
    display: flex;
    align-items: center;
  }

  .description {
    width: 90%;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    object-fit: cover;
    margin-right: 1.2rem;
  }

  p span:first {
    padding-right: 0.6rem;
  }

  @media screen and (max-width: 580px) {
    font-size: 0.9rem;

    button {
      font-size: 0.9rem;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }

  @media screen and (max-width: 510px) {
    p.description {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }

  @media screen and (max-width: 420px) {
    .to-hide {
      display: none;
    }
  }
`;

export default Wrapper;
