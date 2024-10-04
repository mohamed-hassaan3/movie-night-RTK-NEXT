import SearchCard from "@/components/common/cards/SearchCard";
import React from "react";

async function getCompanyID(id: number | string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_DB_API}/company/${id}/movies`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed Fetch Data");
  }
  return response.json();
}

const page = async ({ params }: { params: { companyID: string | number } }) => {
  const companyData = await getCompanyID(params.companyID);
  console.log(companyData.results);
  return (
    <div className="w-[90%] m-auto py-16 min-h-screen">
      {companyData.total_results > 1 && (
        <h1 className="mb-2 italic opacity-80">
          Total Results: {companyData.total_results}
        </h1>
      )}
      {companyData.total_results > 1 ? (
        companyData?.results.map((result: any) => (
          <SearchCard key={result.id} item={result} />
        ))
      ) : (
        <p className="text-center h-[60dvh]">No Result Found!</p>
      )}
    </div>
  );
};

export default page;
