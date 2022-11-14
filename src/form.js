//creamos el componente de form 
import React from "react";

//vamos a recibir la propiedad movie
//con props
export default function Form(props) {
  const { movie } = props;
  return (
    <form>
      <h3>{movie.name}</h3>
      <button> - </button> 0 <button> + </button>
    </form>
  );
}
