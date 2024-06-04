import React from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { Logout } from "@/services/Auth.service";

const Sidebar = () => {
  return (
    <aside className="items-center border-r-2 border-r-gray-200 p-6 ">
      <div className="mb-10">
        <Link href="/">
          <Image
            priority
            src={"/logo.svg"}
            alt={"logo"}
            width={64}
            height={64}
            style={{
              width: "auto",
            }}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <SidebarLink href="/" icon="/home.svg" label="Home" />
        <SidebarLink href="#" icon="/card.svg" label="Card" />
        <SidebarLink href="#" icon="/person.svg" label="Person" />

        <SidebarLink
          href="#"
          icon="/logout.svg"
          label="Logout"
          onClick={Logout}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
