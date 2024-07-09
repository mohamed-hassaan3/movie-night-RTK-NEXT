import React from "react";

import MediaBanner from "@/components/mediaDetails-page/MediaBanner";

const mediaID = ({ params }: { params: { mediaID: number | string } }) => {
  const mediaID = params.mediaID;

  return (
    <div>
      <MediaBanner mediaID={mediaID} />
    </div>
  );
};

export default mediaID;
