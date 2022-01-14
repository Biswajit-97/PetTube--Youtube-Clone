// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { SubIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { client } from "../utils/api-client";
import Skeleton from "../skeletons/HomeSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import ChannelSuggestions from "../components/ChannelSuggestions";
import VideoCard from "../components/VideoCard";

function Subscriptions() {
  const user = useAuth();
  const { data: feed, isLoading, isError, error, isSuccess } = useQuery(
    "Subscriptions",
    () => client.get("/users/subscriptions").then((res) => res.data.feed),
    {
      enabled: user,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<SubIcon />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube channels"
      />
    );
  }

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  if (!isLoading && !feed.length) return <ChannelSuggestions />;

  return (
    <Wrapper>
      <div style={{ marginTop: "1.5rem" }}></div>

      <VideoGrid>
        {isSuccess
          ? feed.map((video) => (
              <VideoCard key={video.id} video={video} hideAvatar />
            ))
          : null}
      </VideoGrid>
    </Wrapper>
  );
}

export default Subscriptions;
