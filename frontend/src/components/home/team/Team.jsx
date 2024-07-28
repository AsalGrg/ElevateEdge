import React from "react";
import "./team.css";
import EachMember from "./EachMember";
import TeamHighlight from "./TeamHighlight";

const Team = () => {
  return (
    <div className="teamContainer container px-3 d-flex flex-column align-items-center gap-5">
      <TeamHighlight />
      <div className="d-flex justify-content-between w-100 mt-3">
        <EachMember
          img={"/team/hussain.png"}
          name={"Hussain Sekh"}
          position={"Creative Head"}
        />

        <EachMember
          img={"/team/dipesh_dai.png"}
          name={"Dipesh Khadka"}
          position={"Founder"}
        />

        <EachMember
          img={"/team/nikhil.png"}
          name={"Nikhil Budhathoki"}
          position={"Backend Developer"}
        />

        <EachMember
          img={"/team/asal.png"}
          name={"Asal Gurung"}
          position={"Frontend Developer"}
        />
      </div>
    </div>
  );
};

export default Team;
