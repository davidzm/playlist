import { produce } from "immer";
import { useReducer, createContext } from "react";
import { light } from "../utils/theme";

const PanelContext = createContext({});

const actions = {};

const initialState = {
  actualTheme: light,
  collapsible: {
    titleMovie: "Movie",
    titleSong: "Song",
    moreMovie: "+ Movie",
    moreSong: "+ Song",
  },
};

const reducer = (state, action) => {};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(produce(reducer), initialState);

  return (
    <PanelContext.Provider value={[state, dispatch]}>
      {children}
    </PanelContext.Provider>
  );
};

export { Provider, actions };
export default PanelContext;
