import React, { useContext } from "react";
import PanelContext, { actions } from "../context/panelContext";
import { StyledTitle } from "./Title/StyledTitle";
import { ThemeProvider } from "styled-components";
import { StyledResetButton } from "./Button/StyledResetButton";
import Collapsible from "./Collapsible";
import { StyledPanelPlaylist } from "./Panel/StyledPanelPlaylist";
import { StyledPanelTitle } from "./Title/StyledPaneleTitle";
import { StyledUl } from "./Ul/StyledUl";
import { StyledLi } from "./Li/StyledLi";
import { StyledLiButtonDeleted } from "./Li/StyledButtonDeleted";
import { StyledLiConteiner } from "./Li/StyledLiConteiner";

const PanelPlaylist = () => {
  const [state, dispatch] = useContext(PanelContext);

  const deletedList = (title, indexId) => {
    console.log("ENTRO A MOVIE", title);
    if (title === "Movie") {
      dispatch({
        type: actions.DELETED_LIST_MOVIE,
        payload: { index: indexId },
      });
    } else if (title === "Song") {
      dispatch({
        type: actions.DELETED_LIST_SONG,
        payload: { index: indexId },
      });
    }
  };
  const mostrarLista = (elemento, title) => {
    console.log("lista", title);
    if (elemento.length > 0) {
      return (
        <StyledUl>
          {elemento.map((item, index) => (
            <StyledLiConteiner key={index}>
              <StyledLi key={index}>{item.description}</StyledLi>
              <StyledLiButtonDeleted
                key={`btn-${index}`}
                onClick={(e) => deletedList(title, index)}
              >
                X
              </StyledLiButtonDeleted>
            </StyledLiConteiner>
          ))}
        </StyledUl>
      );
    } else {
      return (
        <div style={{ textAlign: "center", padding: "15px" }}>
          No hay nada para mostrar
        </div>
      );
    }
  };
  return (
    <ThemeProvider theme={state.actualTheme}>
      <StyledPanelPlaylist>
        <StyledPanelTitle>
          <StyledTitle>My Playlist </StyledTitle>
          <StyledResetButton
            onClick={(e) => dispatch({ type: actions.RESET_BUTTON })}
          >
            Reset Button Both Playlist
          </StyledResetButton>
        </StyledPanelTitle>
        <Collapsible title={state.collapsible.titleMovie}>
          {mostrarLista(state.listMovie, state.collapsible.titleMovie)}
        </Collapsible>
        <Collapsible title={state.collapsible.titleSong}>
          {mostrarLista(state.listSong, state.collapsible.titleSong)}
        </Collapsible>
      </StyledPanelPlaylist>
    </ThemeProvider>
  );
};

export default PanelPlaylist;
