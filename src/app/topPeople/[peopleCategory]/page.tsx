import React from "react";
import { topPeopleAction } from "../topPeopleAction";
import TopPeopleClient from "@/components/common/TopPeopleClient";

const TopPeople = async ({ params }: { params: { peopleCategory: string } }) => {
  const { peopleCategory } = params;
  const { data, isError, error } = await topPeopleAction(peopleCategory, 1); 

  if (isError) {
    return <p className="text-center h-[80dvh] text-red-400">{error}</p>;
  }

  return <TopPeopleClient initialData={data} category={peopleCategory} />;
};

export default TopPeople;

