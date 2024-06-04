import React from "react";

import InfoSection from "./Info/InfoSection";
import IpRentalSection from "./IpRental/IpRentalSection";
import Graph from "./Graph/Graph";

async function Dashboard() {
  return (
    <div className="flex flex-col gap-10 ">
      <InfoSection />
      <Graph />
      <IpRentalSection />
    </div>
  );
}

export default Dashboard;
