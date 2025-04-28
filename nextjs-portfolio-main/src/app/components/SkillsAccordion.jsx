"use client";
import { useState } from "react";

const tabData = [
  {
    label: "Programming Languages",
    items: ["Python", "Java", "MySQL", "PHP","Dart", "SQLite", "C#", "C++", "C","MongoDB"],
  },
  {
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "SCSS", "Bootstrap", "ReactJs", "Next.Js", "TypeScript", "Tailwind CSS", "JSON", "Node.js","Express.js"],
  },
  {
    label: "TechStack",
    items: ["MERN"],
  },
  {
    label: "Frameworks",
    items: ["Flutter", "Flask", "Laravel"],
  },
  {
    label: "Tools and Platforms",
    items: ["Vercel","Heroku","Docker","Github", "Git", "VSCode", "SSMS", "Playwright", "JIRA", "Confluence", "Android Studio", "MS Office"],
  },
];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-700 rounded-lg overflow-hidden">
      {/* Tab List */}
      <div className="sm:w-1/3 bg-gray-800 border-r border-gray-700">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full text-left px-4 py-3 font-semibold hover:bg-gray-700 ${
              activeTab === index ? "bg-gray-700 text-white" : "text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="sm:w-2/3 bg-gray-900 p-6">
        <ul className="list-disc pl-5 text-gray-100 space-y-1">
          {tabData[activeTab].items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsTabs;
