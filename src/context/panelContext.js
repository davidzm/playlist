import { produce } from "immer";
import { useReducer, createContext } from "react";
import { light } from "../utils/theme";

const PanelContext = createContext({});

const actions = {
  CHECKED_MOVIE: "checked-movie",
  CHECKED_SONG: "checked-song",
  SET_MOVIE: "set-movie",
  SET_SONG: "set-song",
  DELETED_LIST_SONG: "deleted-list-song",
  DELETED_LIST_MOVIE: "deleted-list-movie",
};

const initialState = {
  listMovie: [],
  listSong: [],
  actualTheme: light,
  collapsible: {
    titleMovie: "Movie",
    titleSong: "Song",
    moreMovie: "+ Movie",
    moreSong: "+ Song",
  },
  checkBoxActiveMovie: false,
  checkBoxActiveSong: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHECKED_MOVIE:
      state.checkBoxActiveMovie = action.payload.checkBoxActive;
      return;
    case actions.CHECKED_SONG:
      state.checkBoxActiveSong = action.payload.checkBoxActive;
      return;
    case actions.SET_MOVIE:
      state.listMovie.push({
        description: action.payload.movie,
        index: state.listMovie.length,
      });
      return;
    case actions.SET_SONG:
      state.listSong.push({
        description: action.payload.song,
        index: state.listSong.length,
      });
      return;
    case actions.RESET_BUTTON:
      state.listMovie = [];
      state.listSong = [];
      return;
    case actions.DELETED_LIST_MOVIE:
      const nuevaLista = [...state.listMovie];
      nuevaLista.splice(action.payload.index, 1);
      state.listMovie = nuevaLista;
      console.log(nuevaLista);
      return;
    case actions.DELETED_LIST_SONG:
      state.listSong = state.listSong.filter(
        (_, index) => index !== action.payload.index
      );
      return;
    default:
      return;
  }
};

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
