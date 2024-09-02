import Banner from "@/components/home-page/Banner";
import Trending from "@/components/home-page/Trending";

export default function Home() {
  return (
    <main className="wrapper">
      <section className="space-y-8">
        <Banner />
        <Trending />
      </section>
    </main>
  );
}
