import Link from "next/link";
import React, { Fragment } from "react";
import SocialCard from "./SocialCard";

const Social = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const truncateSocial = mediaDetails.reviews?.results.slice(0, 1);
  const social: Reviews[] = mediaDetails.reviews?.results || [];

  console.log("Social", social);
  return (
    <Fragment>
      {social.length !== 0 && (
        <section className="py-8">
          <h2 className="font-bold text-xl">Social</h2>
          <div className="my-6">
            {truncateSocial?.length > 0 &&
              truncateSocial.map((social) => (
                <SocialCard social={social} key={social.id} />
              ))}
          </div>
          <Link
            className="text-lg"
            href={`/mediaDetails/${mediaDetails.id}/fullReviews`}
          >
            Read All Reviews
          </Link>
        </section>
      )}
    </Fragment>
  );
};

export default Social;
