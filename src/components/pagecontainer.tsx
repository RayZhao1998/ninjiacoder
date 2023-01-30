import React from "react";
import SideBar, { Tab } from "./sidebar";

export default function PageContainer(props: {
  children: React.ReactElement;
  selectedTab: Tab;
  onChangeTab: (tab: Tab) => void
}) {
  const { children, selectedTab, onChangeTab } = props
  return (
    <div className="w-full h-screen relative">
      {props.children}
      <div className="absolute bottom-4 flex justify-center w-full">
        <SideBar
          selectedTab={selectedTab}
          onChangeTab={onChangeTab}
        />
      </div>
    </div>
  );
}
