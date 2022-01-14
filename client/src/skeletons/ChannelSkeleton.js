// @ts-nocheck
import React from "react";
import Wrapper from "../styles/ChannelSkeleton";
import { SkeletonLine, VideoCardSkeleton } from "../styles/Skeleton";

function ChannelSkeleton() {
  return (
    <Wrapper>
      <SkeletonLine width="100%" height="170px" />
      <div className="channel-avatar-info">
        <SkeletonLine className="avatar" />
        <div className="channel-info">
          <SkeletonLine width="250px" height="20px" mb="20px" />
          <SkeletonLine width="200px" height="20px" mb="20px" />
        </div>
      </div>
      <div className="videos">
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </div>
    </Wrapper>
  );
}

export default ChannelSkeleton;
