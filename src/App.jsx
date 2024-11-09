import { Provider } from "react-redux";

import { Layout } from "./Layout";
import store from "./Store";
import FireBaseData from "./Context/FireBaseData";
import { useAllState } from "./hooks/USEALLSTATE";

function App() {
  return (
    <>
      <Provider store={store}>
        <FireBaseData.Provider value={useAllState()}>
          <Layout />
        </FireBaseData.Provider>
      </Provider>
    </>
  );
}

export default App;
