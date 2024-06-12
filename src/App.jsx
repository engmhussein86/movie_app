import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

function App() {
  const apiKey = "ad5905b8";
  const [movie, setMovie] = useState(null);

  //
  const getMovie = async (searchTerm) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`,
    );

    const data = await res.json();

    console.log(data);
    setMovie(data);
  };

   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <>
      <h1>Movies App</h1>
      <Form moviesearch={getMovie} />
      { movie && <MovieDisplay movie={movie}/> }
    </>
  );
}

export default App;