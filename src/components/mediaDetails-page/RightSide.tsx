import { formatAmount } from "@/helper/formatText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLink,
  FaTwitter,
} from "react-icons/fa";

const RightSide = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const facebook = mediaDetails?.external_ids?.facebook_id || undefined;
  const instagram = mediaDetails?.external_ids?.instagram_id || undefined;
  const twitter = mediaDetails?.external_ids?.twitter_id || undefined;

  return (
    <div className="flex flex-col gap-4 space-y-6">
      {/* Social Media Section */}
      <div className="flex items-center justify-start gap-4">
        <div className="flex items-center gap-5 after:pr-1 border-r">
          {facebook ? (
            <Link href={`https://www.facebook.com/${facebook}`} target="_blank">
              <FaFacebook size={25} />
            </Link>
          ) : null}
          {instagram ? (
            <Link
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
            >
              <FaInstagram size={25} />
            </Link>
          ) : null}
          {twitter ? (
            <Link href={`https://x.com/${twitter}`} target="_blank">
              <FaTwitter size={25} />
            </Link>
          ) : null}
        </div>
        <div>
          {mediaDetails?.homepage ? (
            <Link href={mediaDetails?.homepage} target="_blank">
              <FaLink size={25} />
            </Link>
          ) : null}
        </div>
      </div>
      {/* Details about the media */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h5 className="font-semibold">Status</h5>
          <p>{mediaDetails?.status ? mediaDetails.status : "_"}</p>
        </div>
        <div className="space-y-1">
          <h5 className="font-semibold">Network</h5>
          <p>
            {mediaDetails?.networks
              ? mediaDetails.networks.map((network) => (
                  <Image
                    key={network.id}
                    className="aspect-[2, 1]"
                    src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${network.logo_path}`}
                    width={100}
                    height={100}
                    alt="Banner"
                  />
                ))
              : "_"}
          </p>
        </div>
        <div className="space-y-1">
          <h5 className="font-semibold">Type</h5>
          <p>{mediaDetails?.type ? mediaDetails.type : "_"}</p>
        </div>
        <div className="space-y-1">
          <h5 className="font-semibold text-nowrap">Original Language</h5>
          <p>
            {mediaDetails?.original_language
              ? mediaDetails.original_language?.toUpperCase()
              : "_"}
          </p>
        </div>
        <div className="space-y-1">
          <h5 className="font-semibold">Budget</h5>
          <p>
            {mediaDetails?.budget ? formatAmount(mediaDetails?.budget) : "_"}
          </p>
        </div>
        <div className="space-y-1">
          <h5 className="font-semibold">Revenue</h5>
          <p>
            {mediaDetails?.revenue ? formatAmount(mediaDetails.revenue) : "_"}
          </p>
        </div>
      </div>
      {/* Keywords */}
      {mediaDetails.keywords?.keywords && (
        <div className=" border-b pb-6">
          <h5 className="font-semibold mb-3">Keywords</h5>
          <div className="flex flex-wrap w-[200%]">
            {mediaDetails.keywords?.keywords &&
              mediaDetails.keywords.keywords?.map((word: Keywords) => (
                <span
                  className="bg-gray-300 p-2 text-xs text-nowrap my-2 mr-2 rounded-md border-gray-400 border shadow-sm"
                  key={word.id}
                >
                  <Link href={`/keyword/${word.id}`}>
                  {word.name}
                  </Link>
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSide;
