import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import {
  calculateAge,
  convertDateToString,
  deathAge,
} from "@/helper/formatText";

const PersonInfo = ({ personDetails }: { personDetails: PersonDetails }) => {
  const {
    also_known_as,
    known_for_department,
    external_ids,
    credits,
    gender,
    birthday,
    place_of_birth,
    deathday,
  } = personDetails;

  return (
    <section className="space-y-9 md:w-[90%] pr-0 md:pr-4">
      <div className="flex items-center gap-4 *:text-2xl *:opacity-80 hover:*:opacity-100 md:m-0 m-auto w-fit md:w-auto">
        {external_ids && external_ids.facebook_id ? (
          <Link
            href={`https://www.facebook.com/${external_ids.facebook_id}`}
            target="_blank"
          >
            <FaFacebook />
          </Link>
        ) : (
          ""
        )}

        {external_ids && external_ids.twitter_id ? (
          <Link
            href={`https://x.com/${external_ids.twitter_id}`}
            target="_blank"
          >
            <FaTwitter />
          </Link>
        ) : (
          ""
        )}
        {external_ids && external_ids.instagram_id ? (
          <Link
            href={`https://www.instagram.com/${external_ids.instagram_id}`}
            target="_blank"
          >
            <FaInstagram />
          </Link>
        ) : (
          ""
        )}
        {external_ids && external_ids.tiktok_id ? (
          <Link
            href={`https://www.tiktok.com/@${external_ids.tiktok_id}`}
            target="_blank"
          >
            <FaTiktok />
          </Link>
        ) : (
          ""
        )}
        {external_ids && external_ids.youtube_id ? (
          <Link
            href={`https://www.youtube.com/${external_ids.youtube_id}`}
            target="_blank"
          >
            <FaYoutube />
          </Link>
        ) : (
          ""
        )}
        {personDetails && personDetails.homepage ? (
          <Link
            href={`${personDetails.homepage}`}
            target="_blank"
            className=" border-l px-2"
          >
            <FaLink />
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="space-y-4 *:break-words overflow-x-hidden">
        <h1 className="text-xl font-bold">Personal Info</h1>
        <hgroup>
          <h3 className="font-medium text-lg">Known For</h3>
          <p className="font-light">
            {known_for_department ? known_for_department : "_"}
          </p>
        </hgroup>
        <hgroup>
          <h3 className="font-medium text-lg">Known Credits</h3>
          <p className="font-light">
            {`${credits?.cast.length + credits?.crew.length}`}
          </p>
        </hgroup>
        <hgroup>
          <h3 className="font-medium text-lg">Gender</h3>
          <p className="font-light">
            {(gender && gender === 1 && "Female") || (gender === 2 && "Male")}
          </p>
        </hgroup>
        <hgroup>
          <h3 className="font-medium text-lg">Birthday</h3>
          <p className="font-light">
            {birthday ? convertDateToString(birthday) : "_"}
            {!deathday && (
              <span className="pl-1 font-normal">{`(${calculateAge(
                birthday
              )} years old)`}</span>
            )}
          </p>
        </hgroup>
        {deathday && (
          <hgroup>
            <h3 className="font-medium text-lg">Day Of Death</h3>
            <p className="font-light">
              {deathday ? convertDateToString(birthday) : "_"}
              <span className="pl-1 font-normal">{`(${deathAge(
                birthday,
                deathday
              )} years old)`}</span>
            </p>
          </hgroup>
        )}
        <hgroup>
          <h3 className="font-medium text-lg">Place of Birth</h3>
          <p className="font-light">{place_of_birth ? place_of_birth : "_"}</p>
        </hgroup>
        <hgroup>
          <h3 className="font-medium text-lg">Also Known As</h3>
          {also_known_as &&
            also_known_as.map((item) => (
              <p key={item} className="font-light leading-8">
                {item}
              </p>
            ))}
        </hgroup>
      </div>
    </section>
  );
};

export default PersonInfo;