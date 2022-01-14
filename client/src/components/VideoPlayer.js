import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { addVideoView } from "../utils/api-client";

function VideoPlayer({ previewUrl, video }) {
  const videoRef = React.useRef();

  const { id, url, thumbnail } = video;

  React.useEffect(() => {
    const vjsPlayer = videojs(videoRef.current);

    if (!previewUrl) {
      vjsPlayer.poster(thumbnail);
      vjsPlayer.src(url);
    }

    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl });
    }

    vjsPlayer.on("ended", () => {
      addVideoView(id);
    });

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    };
  }, [id, thumbnail, url, previewUrl]);

  return (
    <div data-vjs-player>
      <video
        controls
        ref={videoRef}
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
}

export default VideoPlayer;
