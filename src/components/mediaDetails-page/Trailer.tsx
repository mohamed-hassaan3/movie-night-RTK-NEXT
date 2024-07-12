"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Popup from "../common/Popup";

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
const Trailer = ({ videos }: { videos: [];  }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const onOpenPopup = () => {
    setIsOpenPopup(true);
  };
  const onClosePopup = () => {
    setIsOpenPopup(false);
  };

  const findTrailer = (videos: Video[] | undefined) => {
    if (videos) {
      return videos.find((video: Video) => video.type === "Trailer");
    } else {
      return null;
    }
  };
  const getTrailer = findTrailer(videos);

  return (
    <div>
      <button
        onClick={onOpenPopup}
        className="flex items-center gap-2 cursor-pointer hover:opacity-90 active:opacity-90 font-bold text-lg"
      >
        <FaPlay />
        <span>Play trailer</span>
      </button>
      {/* Popup Component */}
      <Popup onClose={onClosePopup} isOpen={isOpenPopup} typeName={getTrailer?.type}>
        <iframe
          width="50%"
          height="50%"
          src={`https://www.youtube.com/embed/${getTrailer?.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`${getTrailer?.name}`}
          ></iframe>
      </Popup>
    </div>
  );
};

export default Trailer;
