import FullCastCard from "@/components/mediaDetails-page/cards/FullCastCard";
import { filterDate } from "@/helper/formatText";
import { uniqueObject } from "@/helper/uniqueObject";
import { getMediaDetailsFromApi } from "@/Utilities/getMediaDetails";
import { getTmdbImageUrl } from "@/Utilities/tmdbImages";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const FullCast = async ({
  params,
}: {
  params: { mediaID: number | string; mediaType: string };
}) => {
  const { mediaID, mediaType } = params;
  const { data: mediaDetails, error, isError } = await getMediaDetailsFromApi(
    mediaType,
    mediaID
  );

  if (isError) {
    return (
      <main className="flex h-[75dvh] items-center justify-center">
        {error?.status_message || "Unable to load cast."}
      </main>
    );
  }

  const casts = mediaDetails.credits?.cast || [];
  const crews = uniqueObject(mediaDetails.credits?.crew || []);
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
    <main>
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
      <article className="grid grid-cols-2 w-[90%] gap-4 justify-items-center m-auto my-6">
        <section className="space-y-6">
          <h1 className="font-bold text-xl">
            Casts <span className="opacity-50 font-normal">{casts.length}</span>
          </h1>
          <div className="space-y-4">
            {!casts.length ? (
              <p>No Results Found</p>
            ) : (
              casts.map((cast: Cast) => <FullCastCard key={cast.id} cast={cast} />)
            )}
          </div>
        </section>
        <section className="space-y-6">
          <h1 className="font-bold text-xl">
            Crews <span className="opacity-50 font-normal">{crews.length}</span>
          </h1>
          <div className="space-y-4">
            {!crews.length ? (
              <p>No Results Found</p>
            ) : (
              crews.map((crew: Cast) => <FullCastCard key={crew.id} cast={crew} />)
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default FullCast;
