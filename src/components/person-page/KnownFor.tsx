import React from "react";
import KnownCard from "./KnownCard";
import { uniqueObject } from "@/helper/uniqueObject";

const KnownFor = ({ credits }: { credits: Credits }) => {
  return (
    <>
      <h1 className="text-xl font-bold sticky left-0 pb-2">Known For</h1>
      <div className="flex items-center justify-start gap-3">
        {credits.cast.length ?
          uniqueObject(credits.cast).slice(0, 10).map((credit: Cast) => (
            <KnownCard credit={credit}  key={credit.id} />
          )) : (uniqueObject(credits.crew).slice(0, 10).map((credit: Cast) => (
            <KnownCard credit={credit}  key={credit.id} />
          )))}
      </div>
    </>
  );
};

export default KnownFor;