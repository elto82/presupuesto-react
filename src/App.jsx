import { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  return (
    <div className="container">
      <header>
        <h1>Weekly expense</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setGastos={setGastos}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
