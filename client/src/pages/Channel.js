// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { VidIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/Channel";
import { client, toggleSubscribeUser } from "../utils/api-client";
import Skeleton from "../skeletons/ChannelSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import EditProfile from "../components/EditProfile";
import useAuthAction from "../hooks/use-auth-action";
import ChannelTabChannels from "../components/ChannelTabChannels";
import ChannelTabAbout from "../components/ChannelTabAbout";
import ChannelTabVideo from "../components/ChannelTabVideo";
import Button from "../styles/Button";

const activeTabStyle = {
  borderBottom: "2px solid white",
  color: "white",
};

function Channel() {
  const user = useAuth();
  const handleAuthAction = useAuthAction();
  const [tab, setTab] = React.useState("VIDEOS");
  const { channelId } = useParams();

  const loggedInUserId = user ? user.id : undefined;
  const userId = channelId || loggedInUserId;

  const { data: channel, isLoading, isError, error } = useQuery(
    ["Channel", userId],
    () => client.get(`/users/${userId}`).then((res) => res.data.user),
    {
      enabled: userId,
    }
  );

  if (!user) {
    return (
      <SignUpCard
        icon={<VidIcon />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  function handleToggleSubscribe() {
    handleAuthAction(toggleSubscribeUser, channel.id);
  }

  return (
    <Wrapper editProfile={channel.isMe}>
      <div className="cover">
        <img src={channel.cover} alt={`${channel.username} cover`} />
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img
              className="avatar lg"
              src={channel.avatar}
              alt={`${channel.username} avatar`}
            />
            <div>
              <h3>{channel.username}</h3>
              <span className="secondary">
                {channel.subscribersCount} subscribers
              </span>
            </div>
          </div>
          {channel.isMe && <EditProfile profile={channel} />}

          {!channel.isMe && !channel.isSubscribed && (
            <Button onClick={handleToggleSubscribe}>Subscribe</Button>
          )}

          {!channel.isMe && channel.isSubscribed && (
            <Button grey onClick={handleToggleSubscribe}>
              Subscribed
            </Button>
          )}
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li
              style={tab === "VIDEOS" ? activeTabStyle : {}}
              onClick={() => setTab("VIDEOS")}
            >
              Videos
            </li>
            <li
              style={tab === "CHANNELS" ? activeTabStyle : {}}
              onClick={() => setTab("CHANNELS")}
            >
              Channels
            </li>
            <li
              style={tab === "ABOUT" ? activeTabStyle : {}}
              onClick={() => setTab("ABOUT")}
            >
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="tab">
        {tab === "VIDEOS" && <ChannelTabVideo videos={channel.videos} />}
        {tab === "CHANNELS" && (
          <ChannelTabChannels channels={channel.channels} />
        )}
        {tab === "ABOUT" && <ChannelTabAbout about={channel.about} />}
      </div>
    </Wrapper>
  );
}

export default Channel;
