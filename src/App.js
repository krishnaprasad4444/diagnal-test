import { Provider } from "react-redux";

import { CategorizedMovies } from "./pages";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CategorizedMovies />
    </Provider>
  );
}

export default App;
