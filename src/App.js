import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';

function App() {
  const [usuario, setUsuario] = useState("");
  function handleUsuario(){
    console.log(usuario)
  }
  return (
    <>
      <p>{usuario}</p> 
      <input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button class="buttonUser" onClick={handleUsuario}>Pesquisar</button>
    </>
  );
}

export default App;
