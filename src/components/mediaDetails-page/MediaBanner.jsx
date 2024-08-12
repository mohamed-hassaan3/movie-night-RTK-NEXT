import Image from "next/image";
import {
  formatDate,
  filterDate,
  loopArr,
  convertRuntime,
} from "@/helper/formatText";
import PercentageBar from "../common/PercentageBar";
import WatchProviders from "./WatchProviders";
import Trailer from "./Trailer";

const MediaBanner = ({ mediaDetails }) => {
  const {
    id,
    backdrop_path,
    title,
    original_title,
    poster_path,
    release_date,
    runtime,
    origin_country,
    original_name,
    genres,
    overview,
    tagline,
    vote_average,
    first_air_date,
    videos,
  } = mediaDetails;

  console.log("MEDIA", mediaDetails);
  return (
    <div className="text-center relative m-auto !text-sm">
      <section className="md:h-[60vh] w-full">
        <Image
          className="w-full h-full object-cover object-right-top opacity-10 "
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            backdrop_path ? backdrop_path : poster_path
          }`}
          layout="fill"
          alt="Banner"
        />
        {/* Content */}
        <article className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-[95%] lg:w-[80%] p-4 lg:p-2 flex static md:flex-row flex-col gap-4 md:items-center">
          <figure>
            <Image
              className="shadow-md w-full object-cover min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px]"
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${poster_path}`}
              width={300}
              height={450}
              alt="Banner"
            />
            <figcaption>
              <WatchProviders mediaDetails={mediaDetails} />
            </figcaption>
          </figure>
          <aside className="flex flex-col p-4 text-start overflow-hidden min-w-[70%]">
            <p className="md:text-2xl font-extrabold text-start md:mr-12">
              {title || original_title || original_name}
              <span className="font-normal">
                ({filterDate(release_date || first_air_date)})
              </span>
            </p>
            <ul className="text-start flex gap-3">
              <li>{release_date && formatDate(release_date)}</li> 
              <li>({loopArr(origin_country)})</li>
              <li>
                <ul className="flex space-x-1">{loopArr(genres)}</ul>
              </li>
              <li className="text-nowrap">{runtime && convertRuntime(runtime)}</li>
            </ul>
            <div className="w-[130px] h-[100px] flex items-center gap-2">
              <div>
                <PercentageBar percentage={vote_average} />
              </div>
              <span className="font-bold">User Score</span>
            </div>
            <div className="my-3">
              <Trailer videos={videos?.results} id={id} />
            </div>
            <div className="space-y-3 md:mr-16">
              <p className="text-gray-500 italic">{tagline}</p>
              {overview && (
                <div className="space-y-2">
                <h3 className="text-xl font-bold">Overview</h3>
                <p>{overview}</p>
              </div>
              )}
            </div>
          </aside>
        </article>
      </section>
    </div>
  );
};

export default MediaBanner;
