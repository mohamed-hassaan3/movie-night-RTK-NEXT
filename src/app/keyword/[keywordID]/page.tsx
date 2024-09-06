import SearchCard from "@/components/common/cards/SearchCard";
import React from "react";

async function getKeyword(keywordID: string | number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIE_DB_API}/keyword/${keywordID}/movies`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Something Went wrong");
  }
  return response.json();
}
const KeywordID = async ({
  params,
}: {
  params: { keywordID: string | number };
}) => {
  const keyword = await getKeyword(params.keywordID);
  console.log("keyword", keyword);

  return (
    <div className="w-[90%] m-auto py-16">
      {keyword.total_results > 1 && (
        <h1 className="mb-2 italic opacity-80">
          Total Results: {keyword.total_results}
        </h1>
      )}
      {keyword.total_results > 1 ? (
        keyword?.results.map((result: any) => (
          <SearchCard key={result.id} item={result} />
        ))
      ) : (
        <p className="text-center h-[60dvh]">No Result Found!</p>
      )}
    </div>
  );
};

export default KeywordID;
