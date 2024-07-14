import Image from "next/image";
import React from "react";
import PROFILE from "../../../public/character.jpg"
const SocialCard = ({ social }: { social: any }) => {
  const { id, author, content, created_at, url, author_details } = social;

  console.log("Content", social);
  return (
    <section className="border shadow-md p-4">
      <div className=" flex items-center gap-4 mb-4">
        {author_details.profile_path || author_details.avatar_path ? (
            <Image
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
              author_details.profile_path
                ? author_details.profile_path
                : author_details.avatar_path
            }`}
            width={40}
            height={40}
            className=" rounded-full h-12 w-12 object-cover"
            alt={author_details.name}
          />
        ) : (
            <Image
          src={PROFILE}
          width={40}
          height={40}
          className=" rounded-full h-12 w-12 object-cover"
          alt={author_details.name}
        />
        )}
        <div className="space-y-1">
          <h2 className="text-xl font-bold">A review by {author}</h2>
          <div className="flex items-center space-x-3">
            <p className="px-6 py-1 text-white bg-darkBlue  rounded-md text-xs">{author_details.rating}</p>
            <span className="text-xs">written by {author} on {new Date(created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <p className="line-clamp-5 leading-8 text-sm font-semibold">{content}</p>
    </section>
  );
};

export default SocialCard;
