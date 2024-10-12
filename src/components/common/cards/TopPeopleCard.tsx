import { TopPeople } from "@/types";
import React from "react";

const TopPeopleCard = ({ person }: { person: TopPeople }) => {
  const {id, known_for, name, profile_path } = person

  return (
    <div>
      {id}
      {/* <div>
        {person.known_for.map((item) => (
          <p key={item.id} className="text-red-200">
            {item.id}
          </p>
        ))}
      </div>{" "} */}
    </div>
  );
};

export default TopPeopleCard;
