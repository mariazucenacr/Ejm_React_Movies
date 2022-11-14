//importar el componente
import Form from "./form";
//creo una variable
const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  }
];

export default function App() {
  return (
    <div>
      <h2> Peliculas </h2>
      {movies.map((movie) => (
        //aqui llamamos a nuestro
        //componente Form
        //enviamos todos los atributos
        //en uno solo
        <Form movie={movie} />
      ))}
    </div>
  );
}
