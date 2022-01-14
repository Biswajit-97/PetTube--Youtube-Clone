// @ts-nocheck
import React from "react";
import styled from "styled-components";
import Wrapper from "../styles/Trending";
import { SkeletonLine, ChannelInfoSkeleton } from "../styles/Skeleton";

const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

function SuggestionSkeleton() {
  return (
    <Wrapper>
      <SkeletonLine width="350px" height="30px" mt="20px" mb="30px" />

      <SkeletonWrapper>
        <ChannelInfoSkeleton />
        <div>
          <SkeletonLine width="250px" height="20px" mb="20px" />
          <SkeletonLine width="200px" height="20px" mb="20px" />
        </div>
      </SkeletonWrapper>

      <SkeletonWrapper>
        <ChannelInfoSkeleton />
        <div>
          <SkeletonLine width="250px" height="20px" mb="20px" />
          <SkeletonLine width="200px" height="20px" mb="20px" />
        </div>
      </SkeletonWrapper>

      <SkeletonWrapper>
        <ChannelInfoSkeleton />
        <div>
          <SkeletonLine width="250px" height="20px" mb="20px" />
          <SkeletonLine width="200px" height="20px" mb="20px" />
        </div>
      </SkeletonWrapper>
    </Wrapper>
  );
}

export default SuggestionSkeleton;
