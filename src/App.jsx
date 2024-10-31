import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { Layout } from "./Layout";
import store from "./Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}

export default App;
