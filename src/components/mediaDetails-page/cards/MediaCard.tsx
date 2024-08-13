import React from "react";
import YouTube from "react-youtube";

interface VideoKey {
  videoKey: string;
}
const MediaCard: React.FC<VideoKey> = ({ videoKey }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      playsinline: 1,
    },
  };

  return <YouTube videoId={videoKey} opts={opts} />;
};

export default MediaCard;
