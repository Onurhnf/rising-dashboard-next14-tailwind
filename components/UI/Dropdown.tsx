"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ ipCount }: { ipCount: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const baseButtonStyle = `inline-flex  w-full rounded-sm   shadow-md p-2 bg-white text-xs font-bold items-center gap-4 focus:outline-none`;

  const className = isOpen
    ? `${baseButtonStyle} text-blue-500`
    : `${baseButtonStyle} text-gray-700`;

  function handleButtonclick(event: React.MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    console.log("Number of IP: " + ipCount);
  }

  return (
    <div className=" w-24 " ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={className}
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Actions
          <Image
            src={isOpen ? "/up.svg" : "/down.svg"}
            alt={"up"}
            width={12}
            height={12}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute bg-white z-10 shadow-md  w-24"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="#"
              className="block px-4 py-2 text-xs text-gray-500 hover:bg-gray-100"
              role="menuitem"
              onClick={handleButtonclick}
            >
              Processing
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-xs text-gray-500 hover:bg-gray-100"
              role="menuitem"
              onClick={handleButtonclick}
            >
              In Progress
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-xs text-gray-500 hover:bg-gray-100"
              role="menuitem"
              onClick={handleButtonclick}
            >
              Completed
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
