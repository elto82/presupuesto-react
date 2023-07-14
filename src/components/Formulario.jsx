import { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleAdicionarGastos = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
  };

  return (
    <>
      <form onSubmit={handleAdicionarGastos}>
        <h2>Add your expenses here</h2>
        {error ? (
          <Error mensaje="All fields are required or the budget is incorrect" />
        ) : null}
        <div className="campo">
          <label>Name of expense</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej.transportation"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>quantity expense</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej.100"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value={"add expense"}
        />
      </form>
    </>
  );
};

export default Formulario;
