// @ts-nocheck
import React from "react";
import { SkeletonLine, VideoCardSkeleton } from "../styles/Skeleton";
import Wrapper from "../styles/WatchVideoSkeleton";

function ChannelSkeleton() {
  return (
    <Wrapper>
      <div className="video-container">
        <SkeletonLine className="video" mb="30px" />
        <SkeletonLine width="300px" height="25px" mb="20px" />
        <SkeletonLine width="200px" height="20px" mb="20px" />
        <div className="avatar-card">
          <SkeletonLine className="avatar" mr="20px" />
          <div className="avatar-card-info">
            <SkeletonLine width="240px" height="20px" mb="20px" />
            <SkeletonLine width="160px" height="20px" mb="20px" />
          </div>
        </div>
      </div>
      <div className="related-videos">
        <SkeletonLine width="180px" height="20px" mb="20px" />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </div>
    </Wrapper>
  );
}

export default ChannelSkeleton;
