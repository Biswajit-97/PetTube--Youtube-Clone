import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 140px;

  div {
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }

  svg {
    height: 120px;
    width: 120px;
  }
`;

export default Wrapper;
