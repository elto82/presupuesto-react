import React from "react";

const Pregunta = () => {
  return (
    <>
      <h2>What is your budget?</h2>
      <form>
        <input
          type="number"
          className="u-full-width   "
          placeholder="Enter your budget"
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
