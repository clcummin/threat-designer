import { createContext, useContext, useState } from "react";

const SplitPanelContext = createContext();

export function SplitPanelProvider({ children }) {
  const [splitPanelOpen, setSplitPanelOpen] = useState(false);
  const [splitPanelContext, setSplitPanelContext] = useState(null);
  const [trail, setTrail] = useState({});

  const handleHelpButtonClick = (panelContext, content = null, action = null) => {
    const newSplitPanelContext = {
      context: panelContext,
      content: content,
      action: action,
    };
    const currentContext = panelContext.context || panelContext.props?.context;

    if (splitPanelOpen) {
      if (currentContext !== panelContext || panelContext.content !== content) {
        setSplitPanelContext(newSplitPanelContext);
        setSplitPanelOpen(true);
      }
    } else {
      setSplitPanelContext(newSplitPanelContext);
      setSplitPanelOpen(true);
    }
  };

  return (
    <SplitPanelContext.Provider
      value={{
        splitPanelOpen,
        setSplitPanelOpen,
        splitPanelContext,
        setSplitPanelContext,
        handleHelpButtonClick,
        trail,
        setTrail,
      }}
    >
      {children}
    </SplitPanelContext.Provider>
  );
}

export const useSplitPanel = () => useContext(SplitPanelContext);
