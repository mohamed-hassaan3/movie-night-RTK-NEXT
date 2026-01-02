"use client";
import React, { useEffect, useState } from "react";
import GeneralCard from "./cards/GeneralCard";

const TopTvClient = ({
  initialData,
  category,
}: {
  initialData: any;
  category: string;
}) => {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHAsMore] = useState(true);
  const [tv, setTv] = useState(initialData.results || []);

  const fetchMoreTv = async () => {
    if (loading) return;
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MOVIE_DB_API}/tv/${category}?language=en-US&page=${page}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
        },
      }
    );
    const newData = await response.json();
    setTv((prevTv: any) => {
      const mergeTv = [...prevTv, ...newData.results];
      const uniqueTv = Array.from(new Set(mergeTv.map((item) => item.id))).map(
        (id) => mergeTv.find((item) => item.id === id)
      );
      return uniqueTv;
    });
    setLoading(false);
    setHAsMore(newData.results.length > 0);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300
      ) {
        fetchMoreTv();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
      {tv && tv.map((item: any) => <GeneralCard key={item.id} media={item} popularType="tv" />)}
      {loading && (
        <p className="text-center my-4 text-nowrap">Loading more TV show...</p>
      )}
    </article>
  );
};

export default TopTvClient;
