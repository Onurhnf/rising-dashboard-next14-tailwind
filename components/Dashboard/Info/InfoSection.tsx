import { getInfo } from "@/services/Dashboard.service";
import { formatNumber } from "@/utils/Helpers";
import React from "react";
import InfoCard from "./InfoCard";

async function InfoSection() {
  const infoData = await getInfo();

  const infoItems = [
    {
      label: (
        <span className="font-semibold text-xs">Subscription expires on</span>
      ),
      value: <span>{infoData.expireTime}</span>,
    },
    {
      label: <span className="font-semibold text-xs">Last charge</span>,

      value: (
        <span>
          {infoData.lastChargeAmount}{" "}
          <span className="text-xs">{infoData.lastCharge}</span>
        </span>
      ),
    },
    {
      label: <span className="font-bold text-sm">Total Data Usage</span>,
      value: (
        <span className="font-bold text-lg">
          {formatNumber(parseInt(infoData.totalDataUsage))} GB
        </span>
      ),
    },
    {
      label: <span className="font-extrabold text-sm">Daily Usage Data</span>,
      value: (
        <span className="font-extrabold text-lg">
          {formatNumber(parseInt(infoData.dailyUsage))} GB
        </span>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-7 ">
      {infoItems.map((item, index) => (
        <InfoCard
          key={index}
          label={item.label}
          index={index}
          value={item.value}
        />
      ))}
    </section>
  );
}

export default InfoSection;
