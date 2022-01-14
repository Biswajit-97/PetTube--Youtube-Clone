// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { HistoryIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";
import TrendingCard from "../components/TrendingCard";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

function History() {
  const user = useAuth();
  const { data: videos, isLoading, isError, error, isSuccess } = useQuery(
    "History",
    () => client.get("/users/history").then((res) => res.data.videos),
    {
      enabled: user,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<HistoryIcon />}
        title="Keep track of what you watch"
        description="Watch history isn't viewable when signed out"
      />
    );
  }

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper noPad>
      <h2>History</h2>
      {isSuccess && !videos.length && (
        <p className="secondary">
          Videos that you have watched will show up here
        </p>
      )}

      {isSuccess
        ? videos.map((video) => (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <TrendingCard video={video} />
            </Link>
          ))
        : null}
    </Wrapper>
  );
}

export default History;
