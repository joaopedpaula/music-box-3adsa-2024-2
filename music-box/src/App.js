import "./utils/globals.js";
import "./utils/globals.css";

import Rotas from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Rotas />
      <ToastContainer />
    </>
  );
}

export default App;
