import { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCantidad(Number(e.target.value));
    console.log(cantidad);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <>
      <h2>What is your budget?</h2>
      {error ? <Error mensaje="The budget must be greater than 0" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width   "
          placeholder="Enter your budget"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Define budget"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
};

export default Pregunta;
