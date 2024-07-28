import React from "react";

const EachMember = ({img,name,position }) => {
  return (
    <div className="member-card d-flex flex-column gap-4">
      <img src={img} className="" />

      <div className="text-center d-flex gap-3 flex-column">
        <h1 className="lg-normalText memberName">{name}</h1>
        <p className="normalText">{position}</p>
      </div>
    </div>
  );
};

export default EachMember;
