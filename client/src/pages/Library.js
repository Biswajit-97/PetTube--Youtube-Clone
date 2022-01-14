import React from "react";
import { LibIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import { useAuth } from "../context/auth-context";
import History from "./History";
import LikedVideos from "./LikedVideos";

function Library() {
  const user = useAuth();

  if (!user) {
    return (
      <SignUpCard
        icon={<LibIcon />}
        title="Enjoy your favorite videos"
        description="Sign in to access videos that you’ve liked or saved"
      />
    );
  }

  return (
    <>
      <History />
      <LikedVideos />
    </>
  );
}

export default Library;
