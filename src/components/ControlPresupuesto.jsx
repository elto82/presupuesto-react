import React from "react";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">budget: ${presupuesto}</div>
      <div className="alert">remaining: ${restante}</div>
    </>
  );
};

export default ControlPresupuesto;
