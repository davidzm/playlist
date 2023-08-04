import "./App.css";
import PanelPlaylist from "./components/PanelPlaylist";
import Movies from "./containers/Movies/Movies";
//import { Provider } from "./context/panelContext";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Movies></Movies>
    </Provider>
  );
}

export default App;
