import Link from "next/link";
import React from "react";
import SocialCard from "./cards/SocialCard";

const Social = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const truncateSocial = mediaDetails.reviews?.results.slice(0, 1);
  const social: Reviews[] = mediaDetails.reviews?.results || [];

  return (
    <>
      {social.length !== 0 && (
        <div className="border-b">
          <section className="py-8">
            <h2 className="font-bold text-xl flex items-center gap-8">
              Social{" "}
              <span className="font-normal">{`Reviews ${social?.length}`}</span>
            </h2>
            <div className="my-6">
              {truncateSocial?.length > 0 &&
                truncateSocial.map((social) => (
                  <SocialCard social={social} key={social.id} />
                ))}
            </div>
            <Link
              className="text-md hover:opacity-50"
              href={`/mediaDetails/${mediaDetails.media_type ? mediaDetails.media_type : "movie"}/${mediaDetails.id}/fullReviews`}
            >
              Read All Reviews
            </Link>
          </section>
        </div>
      )}
    </>
  );
};

export default Social;