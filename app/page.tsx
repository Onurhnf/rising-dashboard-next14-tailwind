import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Dashboard from "@/components/Dashboard/Dashboard";
import MyProxies from "@/components/Dashboard/MyProxies";
import Tabs from "@/components/Dashboard/Tabs";

const DashboardPage = () => {
  const jwt = cookies().get("jwt")?.value;

  // normally, we should verify the user's session.
  if (!jwt) {
    return redirect("/login");
  }

  return (
    <main className="m-[0px_auto] flex max-w-4xl w-full flex-col">
      <div className="mb-10 mt-24">
        <h1 className="font-bold text-3xl">
          Proxies & Scraping Infrastructure
        </h1>
      </div>
      <Tabs>
        <div title="My Proxies">
          <MyProxies />
        </div>
        <div title="Dashboard">
          <Dashboard />
        </div>
      </Tabs>
    </main>
  );
};

export default DashboardPage;
