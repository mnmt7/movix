// import React from "react";
// import "./style.css";

// const SwitchTabs = ({ data, selectedOption }) => {
//   return (
//     <div className="tabs">
//       {options.map((option, index) => (
//         <div key={index} className={`tab ${option === selectedOption ? "selectedTab" : ""}`}>{option}</div>
//       ))}
//     </div>
//   );
// };

// export default SwitchTabs;

import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  // const onTabChange = () => {
  //   console.log("dummy onTabChange");
  // };

  const activeTab = (tab, index) => {
    setLeft(index * 60);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
