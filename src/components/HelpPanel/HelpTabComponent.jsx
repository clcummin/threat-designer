import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: activeTab === tab.label ? "2px solid blue" : "none",
              background: "none",
              border: "none",
            }}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px" }}>{tabs.find((tab) => tab.label === activeTab).content}</div>
    </div>
  );
};

export default Tabs;
