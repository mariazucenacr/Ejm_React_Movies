//creamos el componente de form 
//para la parte de peliculas
import React from "react";

//vamos a recibir la propiedad movie
//con props
export default function Form(props) {
  //vamos a usar el estado de react para
//que el número tenga información dinamica
//segun los click del usuario
//crearemos nuestro componente segun
//una función NO como una clase
//creamos una variable que es un array
//entre () le indicamos que estado debe tener
const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;
  return (
    <form>
      <h3>{movie.name}</h3>
      <button type='button' onClick= {() => setQuantity(quantity-1)}> - </button> 
     {quantity}
      <button type='button' onClick= {() => setQuantity(quantity+1)}> + </button>
    </form>
  );
}

