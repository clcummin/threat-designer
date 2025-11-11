import React from "react";
import TextContent from "./TextContent";
import { useSplitPanel } from "../../../SplitPanelContext";

const Content = () => {
  const { trail } = useSplitPanel();
  if (!trail?.flows || trail.flows === "") {
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
  return <TextContent content={trail?.flows} />;
};

const FlowsInfoTabs = [
  {
    label: "Data Flows",
    id: "Data Flows",
    content: <Content />,
  },
];

export default FlowsInfoTabs;
