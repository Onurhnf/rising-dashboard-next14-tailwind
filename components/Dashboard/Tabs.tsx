"use client";
import { useState, ReactNode, ReactElement } from "react";

interface TabProps {
  children: ReactNode;
  title: string;
}

interface TabsProps {
  children: ReactElement<TabProps>[];
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-8">
        {children.map((child, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="p-4">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
