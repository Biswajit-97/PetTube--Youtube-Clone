// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NoResults from "../components/NoResults";
import Wrapper from "../styles/Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { client } from "../utils/api-client";
import ErrorMessage from "../components/ErrorMessage";
import ChannelInfo from "../components/ChannelInfo";
import TrendingCard from "../components/TrendingCard";

const StyledChannels = styled.div`
  margin-top: 1rem;
`;

function SearchResults() {
  const { searchQuery } = useParams();
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["SearchResults", searchQuery],
    async () => {
      const users = await client
        .get(`/users/search?query=${searchQuery}`)
        .then((res) => res.data.users);
      const videos = await client
        .get(`/videos/search?query=${searchQuery}`)
        .then((res) => res.data.videos);
      return { users, videos };
    }
  );

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  if (isSuccess && !data.videos?.length && !data.users?.length) {
    return (
      <NoResults
        title="No results found"
        text="Try different keywords or remove search filters"
      />
    );
  }

  return (
    <Wrapper>
      <h2>Search Results</h2>
      <StyledChannels>
        {isSuccess
          ? data.users.map((channel) => (
              <ChannelInfo key={channel.id} channel={channel} />
            ))
          : null}
      </StyledChannels>
      {isSuccess
        ? data.videos.map((video) => (
            <TrendingCard key={video.id} video={video} />
          ))
        : null}
    </Wrapper>
  );
}

export default SearchResults;
