import React from "react";

import "./Tab.style.scss";

interface TabProps {
  tablist: string[] | React.JSX.Element[];
  tabChangeFunc: (selectedtab: number) => void;
  tabContentList: any[];
  tabSelected: number;
  rightSideSectionTabHead?: React.JSX.Element;
}

export const Tab = ({
  tablist,
  tabChangeFunc,
  tabContentList,
  tabSelected,
  rightSideSectionTabHead,
}: TabProps) => {
  return (
    <div className="tab-container">
      <div className="tab-list">
        {tablist.map((tab, index) => (
          <span
            onClick={() => {
              tabChangeFunc(index);
            }}
            className={
              index === tabSelected
                ? "selecttab m-text-lg-medium text-orange-600 tabheading"
                : "m-text-lg-medium text-gray-600 tabheading"
            }
            key={index}
          >
            {tab}
          </span>
        ))}
        {rightSideSectionTabHead && (
          <div className="right-side-tab-head">{rightSideSectionTabHead}</div>
        )}
      </div>
      <div className="tab-main-container">
        {tabContentList[tabSelected] ? tabContentList[tabSelected] : null}
      </div>
    </div>
  );
};
