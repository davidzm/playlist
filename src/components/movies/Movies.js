import React, { useContext, useState } from "react";
import { StyledCollapseble } from "./Collapsible/StyledCollapsible";
import { StyledPanelCollapseble } from "./Collapsible/StyledPanelCollapsible";
import { StyledButtonMore } from "./Button/StyledButtonMore";
import { StyledTitleHeader } from "./Title/StyledTitleHeader";
import InputWithList from "./InputTextAdd";
import { useDispatch, useSelector } from "react-redux";
import { expandMoviesPanel } from "./moviesSlice";

const Movies = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { movies } = useSelector(
    state => state.movies
  );
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      if (title === "Movie") {
        dispatch({
          type: actions.CHECKED_MOVIE,
          payload: { checkBoxActive: false },
        });
        setIsActive(true);
      } else if (title === "Song") {
        dispatch({
          type: actions.CHECKED_SONG,
          payload: { checkBoxActive: false },
        });
        setIsActive(true);
      }
    }
    setIsOpen(!isOpen);
  };

  const checkedButton = () => {
    dispatch(expandMoviesPanel(true));
    setIsActive(true);
  };

  return (
    <StyledPanelCollapseble>
      <StyledCollapseble className="collapsible">
        <StyledCollapseble
          className="collapsible-header"
          onClick={handleToggle}
        >
          <StyledTitleHeader>{title}</StyledTitleHeader>
          <StyledButtonMore onClick={checkedButton}>
            {title === "Movie"
              ? state.collapsible.moreMovie
              : state.collapsible.moreSong}
          </StyledButtonMore>
        </StyledCollapseble>
        {isOpen && (
          <StyledCollapseble className="collapsible-content">
            <InputWithList
              title={title}
              isCheked={
                title === "Movie"
                  ? state.checkBoxActiveMovie
                  : state.checkBoxActiveSong
              }
            />
            {children}
          </StyledCollapseble>
        )}
      </StyledCollapseble>
    </StyledPanelCollapseble>
  );
};

export default Movies;
