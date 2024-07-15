import React from "react";
import MediaCard from "./MediaCard";
import Link from "next/link";

const Media = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const videos = mediaDetails.videos?.results;
  return (
    <section className="py-8 border-b">
      <div className="flex items-center justify-between mr-2">
        <h2 className="font-bold text-xl">Media</h2>
        {videos?.length !== 0 && (
          <Link className="text-blue-400 text-sm font-semibold" href={`/mediaDetails/${mediaDetails.id}/fullMedia`}>
            View All Videos
          </Link>
        )}
      </div>
      <div className="overflow-scroll flex py-6 rounded-md">
        {videos?.map((video) => (
          <div key={video.id} className="p-6 bg-black">
            <MediaCard videoKey={video.key} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
