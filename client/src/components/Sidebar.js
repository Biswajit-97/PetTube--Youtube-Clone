// @ts-nocheck
import React from "react";
import Wrapper from "../styles/Sidebar";
import { NavLink } from "react-router-dom";
import {
  HistoryIcon,
  HomeIcon,
  LibIcon,
  LikeIcon,
  SubIcon,
  TrendingIcon,
  VidIcon,
} from "./Icons";
import SidebarAuth from "./SidebarAuth";
import { useAuth } from "../context/auth-context";
import Subscriptions from "./Subscriptions";

function Sidebar({ isSidebarOpen }) {
  const user = useAuth();

  return (
    <Wrapper open={isSidebarOpen}>
      <NavLink exact to="/" activeClassName="active">
        <div className="icon">
          <HomeIcon />
          <span>Home</span>
        </div>
      </NavLink>

      <NavLink to="/feed/trending" activeClassName="active">
        <div className="icon">
          <TrendingIcon />
          <span>Trending</span>
        </div>
      </NavLink>

      <NavLink to="/feed/subscriptions" activeClassName="active">
        <div className="icon">
          <SubIcon />
          <span>Subscriptions</span>
        </div>
      </NavLink>

      <div className="divider"></div>

      <NavLink to="/feed/library" activeClassName="active">
        <div className="icon">
          <LibIcon />
          <span>Library</span>
        </div>
      </NavLink>

      <NavLink to="/feed/history" activeClassName="active">
        <div className="icon">
          <HistoryIcon />
          <span>History</span>
        </div>
      </NavLink>

      <NavLink to="/feed/my_videos" activeClassName="active">
        <div className="icon">
          <VidIcon />
          <span>Your videos</span>
        </div>
      </NavLink>

      <NavLink to="/feed/liked_videos" activeClassName="active">
        <div className="icon">
          <LikeIcon />
          <span>Liked videos</span>
        </div>
      </NavLink>

      <div className="divider"></div>

      {user ? <Subscriptions user={user} /> : <SidebarAuth />}
    </Wrapper>
  );
}

export default Sidebar;
