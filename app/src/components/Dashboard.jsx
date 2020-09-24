import React from "react";
import NewRecommend from "./recommends/newRecommend";
import Recommends from "../components/recommends/Recommends";

function Dashboard() {
  return (
    <div>
      <div className="newRecommend"></div>
      <NewRecommend />
      <Recommends />
    </div>
  );
}

export default Dashboard;
