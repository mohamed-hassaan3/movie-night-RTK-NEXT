import React from "react";

import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import TopCast from "@/components/mediaDetails-page/TopCast";

const mediaID = ({ params }: { params: { mediaID: number | string } }) => {
  const mediaID = params.mediaID;

  return (
    <div className="m-auto">
      <MediaBanner mediaID={mediaID} />
      <TopCast />
    </div>
  );
};

export default mediaID;
