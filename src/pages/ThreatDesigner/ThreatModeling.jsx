import React, { useEffect } from "react";
import { default as ThreatModelingComponent } from "../../components/ThreatModeling/ThreatModeling";

const ThreatModeling = ({ user }) => {
  useEffect(() => {}, [user]);

  return <ThreatModelingComponent user={user} />;
};

export default ThreatModeling;
