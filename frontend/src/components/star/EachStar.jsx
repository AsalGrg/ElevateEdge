import React from "react";
import { CiStar } from "react-icons/ci";

//can be rated and unrated
const EachStar = ({ starType }) => {
  let className = "star " + starType;

  return (
    <div className="bg-primary">
      <h1>
        <CiStar
          className={className}
        />
      </h1>
    </div>
  );
};

export default EachStar;
