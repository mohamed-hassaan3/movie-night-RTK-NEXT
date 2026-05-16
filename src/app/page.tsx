import { Fragment } from "react";
import Banner from "@/components/home-page/Banner";
import TrendingPeople from "@/components/home-page/TrendingPeople";
import Trending from "@/components/home-page/trending/Trending";
import Popular from "@/components/home-page/popular/Popular";
import { getTrending } from "@/components/home-page/trending/getTrending";
import { getPopular } from "@/components/home-page/popular/getPopular";
import { getTmdbImageUrl } from "@/Utilities/tmdbImages";

export default async function Home() {
  const [trending, popularMovies, trendingPeople] = await Promise.all([
    getTrending({ timeWindow: "day" }),
    getPopular({ type: "movie" }),
    getPopular({ type: "person" }),
  ]);
  const bannerImage = getTmdbImageUrl(
    trending.data?.results?.find((media) => media.backdrop_path)?.backdrop_path,
    "w1280"
  );
  return (
    <Fragment>
      <main className="wrapper">
        <section className="md:space-y-16 space-y-8 px-4 xl:px-0">
          <Banner imageUrl={bannerImage} />
          <Trending
            initialData={trending.data}
            initialError={trending.error}
            initialIsError={trending.isError}
          />
          <Popular
            initialData={popularMovies.data}
            initialError={popularMovies.error}
            initialIsError={popularMovies.isError}
          />
          <TrendingPeople
            initialData={trendingPeople.data}
            initialError={trendingPeople.error}
            initialIsError={trendingPeople.isError}
          />
        </section>
      </main>
    </Fragment>
  );
}
