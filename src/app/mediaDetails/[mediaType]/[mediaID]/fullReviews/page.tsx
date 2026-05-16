import SocialCard from "@/components/mediaDetails-page/cards/SocialCard";
import { filterDate } from "@/helper/formatText";
import { getMediaDetailsFromApi } from "@/Utilities/getMediaDetails";
import { getTmdbImageUrl } from "@/Utilities/tmdbImages";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const FullReviews = async ({
  params,
}: {
  params: { mediaID: string | number; mediaType: string };
}) => {
  const { mediaID, mediaType } = params;
  const { data: mediaDetails, error, isError } = await getMediaDetailsFromApi(
    mediaType,
    mediaID
  );

  if (isError) {
    return (
      <main className="flex h-[75dvh] items-center justify-center">
        {error?.status_message || "Unable to load reviews."}
      </main>
    );
  }

  const reviews: Reviews[] = mediaDetails?.reviews?.results || [];
  const posterUrl = getTmdbImageUrl(
    mediaDetails.poster_path || mediaDetails.backdrop_path,
    "w185"
  );
  const title =
    mediaDetails.title ||
    mediaDetails.name ||
    mediaDetails.original_title ||
    mediaDetails.original_name;

  return (
    <main className="w-full m-auto">
      <header className="bg-gray-800 my-6">
        <figure className="w-[75%] m-auto flex items-center gap-4">
          {posterUrl ? (
            <Image src={posterUrl} width={80} height={140} alt={title || "poster"} />
          ) : null}
          <figcaption>
            <h1 className="lg:text-3xl text-lg lg:font-extrabold font-medium text-white">
              {title}{" "}
              <span className="opacity-50 font-normal">
                {`(${filterDate(
                  mediaDetails.release_date || mediaDetails.first_air_date
                )})`}
              </span>
            </h1>
            <Link
              className="opacity-50 text-white flex items-center gap-1 mt-2 hover:opacity-100"
              href={`/mediaDetails/${mediaType}/${mediaID}`}
            >
              <FaArrowLeft /> Back to main
            </Link>
          </figcaption>
        </figure>
      </header>
      <section className="w-3/4 m-auto py-6 space-y-6">
        {!reviews.length ? (
          <p>No Reviews found</p>
        ) : (
          reviews.map((review) => <SocialCard social={review} key={review.id} />)
        )}
      </section>
    </main>
  );
};

export default FullReviews;
