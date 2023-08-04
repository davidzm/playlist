import "./App.css";
import PanelPlaylist from "./components/PanelPlaylist";
import { Provider } from "./context/panelContext";
//import { Provider } from "react-redux";
//import { store } from "./store";

function App() {
  return (
    <Provider>
      <PanelPlaylist></PanelPlaylist>
    </Provider>
  );
}

export default App;
