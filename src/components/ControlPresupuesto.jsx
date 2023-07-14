import { revisarPresupuesto } from "../helpers/helpers.js";
const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">budget: ${presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        remaining: ${restante}
      </div>
    </>
  );
};

export default ControlPresupuesto;
