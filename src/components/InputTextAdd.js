import React, { useContext, useState } from "react";
import PanelContext, { actions } from "../context/panelContext";
import { StyledInputPanel } from "./Input/StyledInputPanel";
import { StyledInputConteiner } from "./Input/StyledInputConteiner";
import { StyledInput } from "./Input/StlyledInput";
import { StyledInputButton } from "./Input/StyledInputButton";

const InputWithList = ({ title, isCheked }) => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useContext(PanelContext);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      if (title === "Movie") {
        dispatch({ type: actions.SET_MOVIE, payload: { movie: inputValue } });
      } else if (title === "Song") {
        dispatch({ type: actions.SET_SONG, payload: { song: inputValue } });
      }
      setInputValue("");
    }
  };

  return (
    <StyledInputPanel>
      {isCheked && (
        <StyledInputConteiner>
          <StyledInput
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Ingrese texto"
          />
          <StyledInputButton onClick={handleAddItem}>Agregar</StyledInputButton>
        </StyledInputConteiner>
      )}
    </StyledInputPanel>
  );
};

export default InputWithList;
