import React, { useContext, useState } from "react";
import { StyledCollapseble } from "./Collapsible/StyledCollapsible";
import { StyledPanelCollapseble } from "./Collapsible/StyledPanelCollapsible";
import { StyledButtonMore } from "./Button/StyledButtonMore";
import PanelContext from "../context/panelContext";
import { StyledTitleHeader } from "./Title/StyledTitleHeader";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useContext(PanelContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledPanelCollapseble>
      <StyledCollapseble className="collapsible">
        <StyledCollapseble
          className="collapsible-header"
          onClick={handleToggle}
        >
          <StyledTitleHeader>{title}</StyledTitleHeader>
          <StyledButtonMore>
            {title === "Movie"
              ? state.collapsible.moreMovie
              : state.collapsible.moreSong}
          </StyledButtonMore>
        </StyledCollapseble>
        {isOpen && (
          <StyledCollapseble className="collapsible-content">
            {children}
          </StyledCollapseble>
        )}
      </StyledCollapseble>
    </StyledPanelCollapseble>
  );
};

export default Collapsible;
