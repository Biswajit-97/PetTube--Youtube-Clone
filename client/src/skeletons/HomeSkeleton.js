import React from "react";
import Wrapper from "../styles/Home";
import { VideoCardSkeleton } from "../styles/Skeleton";
import VideoGrid from "../styles/VideoGrid";

function HomeSkeleton() {
  return (
    <Wrapper>
      <VideoGrid>
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </VideoGrid>
    </Wrapper>
  );
}

export default HomeSkeleton;
