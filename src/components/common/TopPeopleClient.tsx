"use client";

import { useState, useEffect } from "react";
import TopPeopleCard from "./cards/TopPeopleCard";

export default function TopPeopleClient({
  initialData,
  category,
}: {
  initialData: any;
  category: string;
}) {
  const [people, setPeople] = useState(initialData.results || []);
  const [page, setPage] = useState(2); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    if (loading) return;
    setLoading(true);
    const res = await fetch( 
      `${process.env.NEXT_PUBLIC_MOVIE_DB_API}/person/${category}?language=en-US&page=${page}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
        },
      }
    );
    const newData = await res.json();

    setPeople((prevPeople) => {
      const mergedPeople = [...prevPeople, ...newData.results];
      const uniquePeople = Array.from(
        new Set(mergedPeople.map((item) => item.id))
      ).map((id) => mergedPeople.find((item) => item.id === id));
      return uniquePeople;
    });
    setPage((prevPage) => prevPage + 1);
    setHasMore(newData.results.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        hasMore
      ) {
        fetchMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      <h1 className="font-bold md:text-xl 2xl:text-lg mb-6 lg:mb-3">
        Top Rated
      </h1>
      <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
        {people.map((item: any) => (
          <TopPeopleCard key={item.id} person={item} />
        ))}

      </article> 
      {loading && <p className="text-center my-4">Loading more people...</p>}
    </main>
  );
}
