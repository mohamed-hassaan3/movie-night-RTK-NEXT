import React from "react";
import { topTvAction } from "../topTvAction";
import GeneralCard from "@/components/common/cards/GeneralCard";
import { convertSymbol } from "@/helper/formatText";
import TopTvClient from "@/components/common/TopTvClient";

export async function generateMetadata({
  params,
}: {
  params: { categoryTv: string };
}) {
  const { categoryTv } = params;
  return {
    title: convertSymbol(categoryTv),
  };
}

const CategoryTv = async ({ params }: { params: { categoryTv: string } }) => {
  const { categoryTv } = params;
  const { data, isError, error } = await topTvAction(`${categoryTv}`);

  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      {isError && <p className="text-center h-[80dvh] text-red-400">{error}</p>}
      <h1 className="font-bold md:text-xl 2xl:text-lg">
        {convertSymbol(categoryTv)} TV
      </h1>
      <TopTvClient initialData={data} category={categoryTv} />
    </main>
  );
};

export default CategoryTv;
