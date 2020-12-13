import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeader from './components/MovieHeader';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const getMovies = async () =>{
    const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${process.env.REACT_APP_OMDB_API}`;
    const response = await fetch(url);
    const responseJSON = await response.json()
    console.log(responseJSON);
    
    if(responseJSON.Search){
      setMovies(responseJSON.Search);
    }
  }

  //Run this when the page loads
  useEffect(() => {
    getMovies();
  }, [searchMovie])
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
      <MovieHeader heading="Movies"/>
      <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
