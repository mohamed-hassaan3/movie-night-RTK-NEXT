"use client";
import { useState, useEffect, Fragment } from "react";
import Banner from "@/components/home-page/Banner";
import Trending from "@/components/home-page/Trending";
import Popular from "@/components/home-page/Popular";
import TrendingPeople from "@/components/home-page/TrendingPeople";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-darkBlue z-50"></div>
      ) : (
        <main className="wrapper">
          <section className="md:space-y-16 space-y-8 px-4 xl:px-0">
            <Banner />
            <Trending />
            <Popular />
            <TrendingPeople />
          </section>
        </main>
      )}
    </Fragment>
  );
}
