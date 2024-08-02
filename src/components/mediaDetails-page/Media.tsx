import React from "react";
import MediaCard from "./MediaCard";

const Media = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const videos = mediaDetails.videos?.results;
  return (
    <>
      {videos?.length ? (
        <section className="py-8 border-b">
          <div className="flex items-center justify-between mr-2">
            <h2 className="font-bold text-xl flex items-center gap-6">
              Media <span className="font-normal">Videos {videos?.length}</span>
            </h2>
          </div>
          <div className="overflow-scroll flex py-6 rounded-md">
            {videos?.map((video) => (
              <div key={video.id} className="p-6 bg-black">
                <MediaCard videoKey={video.key} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Media;
