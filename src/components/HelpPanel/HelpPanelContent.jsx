import React from "react";
import Icon from "@cloudscape-design/components/icon";
import Button from "@cloudscape-design/components/button";
import { InfoContent } from "./InfoContent";

const iconSize = "big";

const IconWithButton = ({ iconName, handleHelpButtonClick, context }) => {
  return (
    <>
      {iconName && iconName !== "" && (
        <>
          <Icon name={iconName} size={iconSize} />
          &nbsp;
        </>
      )}
      &nbsp;
      <Button
        variant="inline-link"
        onClick={() => handleHelpButtonClick(<InfoContent context={context} />)}
      >
        <small>Trail</small>
      </Button>
    </>
  );
};

export default IconWithButton;
