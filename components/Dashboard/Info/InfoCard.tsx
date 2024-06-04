import React from "react";

function InfoCard({ label, value, index }: any) {
  const even = index % 2 === 0;
  const base =
    " rounded-xl p-5 gap-2 flex flex-col  shadow-none hover:shadow-md";

  const style = even ? base + " bg-sky-100 " : base + " bg-slate-200 ";

  return (
    <div className={style}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

export default InfoCard;
