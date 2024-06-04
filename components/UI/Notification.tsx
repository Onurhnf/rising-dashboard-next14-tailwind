"use client";
import { useEffect, useState } from "react";

const Notification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-sky-200  text-white p-4 rounded shadow-lg">
      <div className="flex justify-between items-center text-black">
        <span>
          Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit
          card. Start Free Trial
        </span>
        <button
          className="ml-4 text-gray-600 hover:text-black"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
