import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import TopCast from "@/components/mediaDetails-page/TopCast";
import RightSide from "@/components/mediaDetails-page/RightSide";
import Social from "@/components/mediaDetails-page/Social";
import Media from "@/components/mediaDetails-page/Media";
import Recommendation from "@/components/mediaDetails-page/Recommendation";
import { getMediaDetailsFromApi } from "@/Utilities/getMediaDetails";
import { getImagePalette } from "@/Utilities/getImagePalette";
import { getTmdbImageUrl } from "@/Utilities/tmdbImages";

const TvID = async ({ params }: { params: { tvID: number | string } }) => {
  const tvID = params.tvID;
  const { data: tvDetails, error, isError } = await getMediaDetailsFromApi(
    "tv",
    tvID
  );
  const bannerPalette = await getImagePalette(
    getTmdbImageUrl(tvDetails?.poster_path || tvDetails?.backdrop_path, "w342")
  );
 
  return (
    <main className="overflow-hidden">
      {isError ? (
        <p className="text-center my-4 mx-auto h-[75dvh] flex flex-col items-center justify-center">
          {error?.status_message || "Unable to load TV details."}
        </p>
      ) : (
        <section>
          <MediaBanner mediaDetails={tvDetails} bannerPalette={bannerPalette} />
          <section className="grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
            <article className="col-span-5">
              <TopCast mediaDetails={tvDetails} />
              <Social mediaDetails={tvDetails} />
              <Media mediaDetails={tvDetails} />
              {tvDetails.recommendations?.results.length !== 0 && (
              <Recommendation mediaDetails={tvDetails} />
              )}
            </article>
            <aside className="col-span-1">
              <RightSide mediaDetails={tvDetails} />
            </aside>
          </section>
        </section>
      )}
    </main>
  );
};

export default TvID;
