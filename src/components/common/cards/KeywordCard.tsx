import { SearchItem } from "@/types";
import Link from "next/link";
import React from "react";

const KeywordCard = ({ item }: { item: SearchItem }) => {
  return (
    <Link href={`/keyword/${item.id}`} className="block hover:opacity-70 w-fit">
      {item.name}
    </Link>
  );
};

export default KeywordCard;