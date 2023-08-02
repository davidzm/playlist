import "./App.css";
import PanelPlaylist from "./components/PanelPlaylist";
import { Provider } from "./context/panelContext";

function App() {
  return (
    <Provider>
      <PanelPlaylist></PanelPlaylist>
    </Provider>
  );
}

export default App;
