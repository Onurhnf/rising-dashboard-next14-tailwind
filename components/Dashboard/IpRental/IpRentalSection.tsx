import React from "react";

import Table from "@/components/UI/Table/Table";
import IpRentalRow from "./IpRentalRow";
import { getTable } from "@/services/Dashboard.service";

async function IpRentalSection() {
  const tableData = await getTable();

  return (
    <section className="p-10 rounded-2xl bg-white">
      <h1 className="font-semibold text-gray-600">Transactions History</h1>
      <Table>
        <Table.Header>
          <div>Type</div>
          <div>Location</div>
          <div>Rental Period</div>
          <div>Number of IP</div>
          <div>SpesificPurpose</div>
          <div>Date</div>
          <div>Actions</div>
        </Table.Header>
        <Table.Body
          data={tableData}
          render={(table, i) => <IpRentalRow table={table} key={i} />}
        />
      </Table>
    </section>
  );
}

export default IpRentalSection;
