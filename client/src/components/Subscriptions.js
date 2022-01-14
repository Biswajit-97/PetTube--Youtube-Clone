import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../styles/Subscriptions";

function Subscriptions({ user }) {
  if (!user) return null;

  return (
    <Wrapper>
      {user.channels.length ? <h4>Subscriptions</h4> : null}

      {user.channels.length
        ? user.channels.map((channel) => (
            <Link key={channel.id} to={`/channel/${channel.id}`}>
              <div className="channel">
                <img src={channel.avatar} alt={`${channel.username} avatar`} />
                <span>{channel.username}</span>
              </div>
            </Link>
          ))
        : null}
    </Wrapper>
  );
}

export default Subscriptions;
