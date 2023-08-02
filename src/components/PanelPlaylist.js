import React, { useContext } from "react";
import PanelContext, { actions } from "../context/panelContext";
import { StyledTitle } from "./Title/StyledTitle";
import { ThemeProvider } from "styled-components";
import { StyledResetButton } from "./Button/StyledResetButton";
import Collapsible from "./Collapsible";
import { StyledPanelPlaylist } from "./Panel/StyledPanelPlaylist";

const PanelPlaylist = () => {
  const [state, dispatch] = useContext(PanelContext);

  return (
    <ThemeProvider theme={state.actualTheme}>
      <StyledPanelPlaylist>
        <StyledTitle>
          My Playlist
          <StyledResetButton>Reset Button Both Playlist</StyledResetButton>
        </StyledTitle>

        <Collapsible title={state.collapsible.titleMovie}>
          <p>Contenido de la sección 1</p>
        </Collapsible>
        <Collapsible title={state.collapsible.titleSong}>
          <p>Contenido de la sección 2</p>
        </Collapsible>
      </StyledPanelPlaylist>
    </ThemeProvider>
  );
};

export default PanelPlaylist;
