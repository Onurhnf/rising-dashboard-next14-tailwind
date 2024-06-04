"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: 0, max: 10 })),
      borderColor: "#000",
      backgroundColor: "#000",
    },
  ],
};

function Graph() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-5">
      <h1 className="font-bold text-base">Data usage per network</h1>
      <Line data={data} />
    </div>
  );
}

export default Graph;
