import React from "react";
import TextContent from "./TextContent";
import { useSplitPanel } from "../../../SplitPanelContext";

const Content = () => {
  const { trail } = useSplitPanel();
  if (!trail?.assets || trail.assets === "") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          width: 400,
        }}
      >
        No data
      </div>
    );
  }
  return <TextContent content={trail?.assets} />;
};

const AssetsInfoTabs = [
  {
    label: "Assets",
    id: "Assets",
    content: <Content />,
  },
];

export default AssetsInfoTabs;
