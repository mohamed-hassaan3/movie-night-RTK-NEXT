"use client";
import React, { useEffect, useState } from "react";
import GeneralCard from "./cards/GeneralCard";

const TopMoviesClient = ({
  initialMovies,
  category,
}: {
  initialMovies: any;
  category: string;
}) => {
  const [movies, setMovies] = useState(initialMovies.results || []);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreMovies = async () => {
    if (loading) return;
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_API}/movie/${category}?language=en-US&page=${page}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    setMovies((prevMovies: any) => {
      const mergeMovies = [...prevMovies, ...data.results];
      const uniqueMovies = Array.from(
        new Set(mergeMovies.map((item) => item.id))
      ).map((id) => mergeMovies.find((item) => item.id === id));
      return uniqueMovies;
    });
    setPage((prev: any) => prev + 1);
    setHasMore(data.results.length > 0);
    setLoading(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        hasMore
      ) {
        fetchMoreMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
      {movies &&
        movies?.map((item: any) => <GeneralCard key={item.id} media={item} />)}
      {loading && (
        <p className="text-center my-4 text-nowrap">Loading more Movies...</p>
      )}
    </article>
  );
};

export default TopMoviesClient;
