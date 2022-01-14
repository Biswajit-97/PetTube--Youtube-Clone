import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../styles/TrendingCard";
import { formatCreatedAt } from "../utils/date";

function TrendingCard({ video }) {
  return (
    <Wrapper>
      <Link to={`/watch/${video.id}`}>
        <img className="thumb" src={video.thumbnail} alt={video.title} />
      </Link>
      <div className="video-info-container">
        <Link to={`/watch/${video.id}`}>
          <h3>{video.title}</h3>
        </Link>
        <p className="secondary">
          <Link to={`/channel/${video.user.id}`}>{video.user.username}</Link>
          <span>•</span>
          <span>{video.views} views</span>
          <span>•</span> <span>{formatCreatedAt(video.createdAt)}</span>
        </p>
        <p className="secondary">{video.description}</p>
      </div>
    </Wrapper>
  );
}

export default TrendingCard;
