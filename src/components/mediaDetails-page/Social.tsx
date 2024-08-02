import Link from "next/link";
import React from "react";
import SocialCard from "./SocialCard";

const Social = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const truncateSocial = mediaDetails.reviews?.results.slice(0, 1);
  const social: Reviews[] = mediaDetails.reviews?.results || [];

  console.log("Social", social);
  return (
    <div className="border-b">
      {social.length !== 0 && (
        <section className="py-8">
          <h2 className="font-bold text-xl flex items-center gap-8">Social <span className="font-normal">{`Reviews ${social?.length}`}</span></h2>
          <div className="my-6">
            {truncateSocial?.length > 0 &&
              truncateSocial.map((social) => (
                <SocialCard social={social} key={social.id} />
              ))}
          </div>
          <Link
            className="text-md hover:opacity-50"
            href={`/mediaDetails/${mediaDetails.id}/fullReviews`}
          >
            Read All Reviews
          </Link>
        </section>
      )}
    </div>
  );
};

export default Social;
