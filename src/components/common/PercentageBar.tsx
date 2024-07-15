import { formatVote } from "@/helper/formatText";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface PercentageBarProps {
  percentage: number;
}

const PercentageBar: React.FC<PercentageBarProps> = ({ percentage }) => {
  const voteAverage = formatVote(percentage);

  return (
    <div className="bg-darkBlue rounded-full font-bold p-1">
      <CircularProgressbar
        styles={buildStyles({
          pathColor:
            voteAverage >= 70
              ? "#4dba0d"
              : voteAverage >= 40
              ? "#bafc03"
              : "#fcba03",
          trailColor:
            voteAverage >= 70
              ? "#205202"
              : voteAverage >= 40
              ? "#4b5202"
              : "#999",
          textColor: "#fff",
          textSize: "24px"
        })}
        value={voteAverage}
        text={`${voteAverage}%`}
      />
    </div>
  );
};

export default PercentageBar;
