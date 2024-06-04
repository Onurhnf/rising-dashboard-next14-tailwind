import React from "react";

import { ITableResponse } from "@/interfaces/IDashboard.interface";
import Table from "@/components/UI/Table/Table";
import { formatDate } from "@/utils/Helpers";
import Dropdown from "@/components/UI/Dropdown";

function IpRentalRow({ table }: { table: ITableResponse }) {
  return (
    <Table.Row>
      <div>{table.type}</div>
      <div>{table.location}</div>
      <div>{table.rental}</div>
      <div>{table.ipcount}</div>
      <div>{table.purpose}</div>
      <div>{formatDate(table.date)}</div>
      <div>
        <Dropdown ipCount={table.ipcount} />
      </div>
    </Table.Row>
  );
}

export default IpRentalRow;
