import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../styles/Avatar";
import Wrapper from "../styles/VideoCard";
import { formatCreatedAt } from "../utils/date";
import DeleteVideoDropdown from "./DeleteVideoDropdown";

function VideoCard({ video, hideAvatar, noUsername }) {
  return (
    <Wrapper>
      <Link to={`/watch/${video.id}`}>
        <img className="thumb" src={video.thumbnail} alt={video.title} />
      </Link>
      <div className="video-info-container">
        <div className="channel-avatar">
          {!hideAvatar && (
            <Avatar
              style={{ marginRight: "0.8rem" }}
              src={video.user.avatar}
              alt={`${video.user.username}'s channel avatar`}
            />
          )}
        </div>
        <div className="video-info">
          <Link to={`/watch/${video.id}`}>
            <h4 className="truncate">{video.title}</h4>
          </Link>
          {!noUsername && (
            <Link to={`/channel/${video.user.id}`}>
              <span className="secondary">{video.user.username}</span>
            </Link>
          )}
          <p className="secondary leading-4">
            <span>{video.views} views</span> <span>•</span>{" "}
            <span>{formatCreatedAt(video.createdAt)}</span>
          </p>
        </div>
        <DeleteVideoDropdown video={video} />
      </div>
    </Wrapper>
  );
}

export default VideoCard;
