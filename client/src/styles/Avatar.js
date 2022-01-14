import styled from "styled-components";

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: 26px;
    height: 26px;
  }
`;

export default Avatar;
