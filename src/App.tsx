import Home from "./components";
import GlobalContextProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
