"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarLink = ({ href, icon, label, onClick }: any) => {
  const path = usePathname();

  const isActive = (href: string) => {
    return path === href;
  };

  const handleOnClick = async () => {
    if (onClick) await onClick();
  };

  return (
    <div
      onClick={handleOnClick}
      className={`p-3 rounded-2xl ${
        isActive(href) ? "bg-blue-100" : "hover:bg-sky-100"
      }`}
    >
      <Link href={href}>
        <Image src={icon} alt={label} width={24} height={24} />
      </Link>
    </div>
  );
};

export default SidebarLink;
