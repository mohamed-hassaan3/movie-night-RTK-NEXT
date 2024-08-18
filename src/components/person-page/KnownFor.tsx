import Image from "next/image";
import Link from "next/link";
import React from "react";
import KnownCard from "./KnownCard";

const KnownFor = ({ credits }: { credits: Credits }) => {
  return (
    <>
      <h1 className="text-xl font-bold sticky left-0 pb-2">Known For</h1>
      <div className="flex items-center justify-start gap-3">
        {credits &&
          credits.cast.slice(0, 10).map((credit) => (
            <KnownCard credit={credit}  key={credit.id} />
          ))}
      </div>
    </>
  );
};

export default KnownFor;
