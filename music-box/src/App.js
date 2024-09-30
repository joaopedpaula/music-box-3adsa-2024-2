import { useState } from "react";
import api from "./api.js";
import "./globals.css";


/* LÓGICA INICIAL DA PRIMEIRA AULA */


function App() {
  const [musicas, setMusicas] = useState([]);

  function listar() {
    api
      .get()
      .then((res) => {
        console.log("data: ", res);
        setMusicas(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      h1
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}

export default App;
