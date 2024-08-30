import Banner from "@/components/home-page/Banner";
import Trending from "@/components/home-page/Trending";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="wrapper">
      <section className="space-y-8">
        <Banner />
        <Suspense fallback="Loading...">
          <Trending />
        </Suspense>
      </section>
    </main>
  );
}
