import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 2rem;
  padding: 1.75em;
  padding-bottom: 7rem;

  .video-container .video-info {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .video-info span {
    color: ${(props) => props.theme.secondaryColor};
  }

  .channel-info-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .channel-info-meta {
    line-height: 1.2;
  }

  .video-info-stats {
    display: flex;
    align-items: center;
  }

  .video-info-stats div {
    margin-left: 6rem;
    position: relative;
    top: -2px;
  }

  .channel-info-flex button {
    font-size: 0.9rem;
  }

  .channel-info-description {
    padding-top: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.darkGrey};
    border-top: 1px solid ${(props) => props.theme.darkGrey};
  }

  .channel-info-description p {
    font-size: 0.9rem;
    padding: 1rem 0;
  }

  .up-next {
    margin-bottom: 1em;
  }

  // .related-videos img {
  //   height: 140px;
  // }

  .related-videos div {
    margin-bottom: 1rem;
  }

  related-videos h3 {
    margin-bottom: 1rem;
  }

  svg {
    fill: ${(props) => props.theme.darkGrey};
  }

  ${(props) =>
    props.filledLike &&
    css`
      .like svg {
        fill: ${(props) => props.theme.blue};
      }
    `}

  ${(props) =>
    props.filledDislike &&
    css`
      .dislike svg {
        fill: ${(props) => props.theme.blue};
      }
    `}

	@media screen and (max-width: 930px) {
    grid-template-columns: 90%;
    .related-videos {
      display: none;
    }
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 425px) {
    .video-info-stats div {
      margin-left: 1rem;
    }
  }
`;

export default Wrapper;
