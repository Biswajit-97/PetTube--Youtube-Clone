import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.black};
  min-height: 100vh;
  padding-bottom: 7rem;

  .cover {
    height: 170px;
  }

  .cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header-tabs {
    padding: 1.2rem 1rem;
    padding-bottom: 0;
    background: ${(props) => props.theme.bg};
  }

  .header {
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  .tabs,
  .tab {
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 80%;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.1px;
  }

  li:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 860px) {
    .header,
    .tabs,
    .tab {
      width: 90%;
    }
  }

  @media screen and (max-width: 470px) {
    .header,
    .tabs {
      width: 100%;
    }
  }

  ${(props) =>
    props.editProfile &&
    css`
      @media screen and (max-width: 440px) {
        .header {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    `}
`;

export default Wrapper;
