import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeader from "./components/MovieHeader";
import SearchBox from "./components/SearchBox";
import AddFavMovieComponent from "./components/AddFavorMovie";
import RemoveFavMovieComponent from "./components/RemoveFavorMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const getMovies = async (searchMovie) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API}&query=${searchMovie}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (responseJSON.results) {
      setMovies(responseJSON.results);
    }
  };

  //Run this when the page loads
  useEffect(() => {
    getMovies(searchMovie);
    if(localStorage.getItem("movie-data") == null){
      localStorage.setItem("movie-data", '[]');
    }
    
  }, [searchMovie]);

  //Run Check to see if data is in local storage
  useEffect(() => {
    const movie_data = JSON.parse(localStorage.getItem("movie-data"));
    setFavorites(movie_data);
  }, []);

  const saveUserDataToLocal = (movieData) => {
    localStorage.setItem("movie-data", JSON.stringify(movieData));
  };

  const addFavoriteMovie = (movie) => {
    let newFavList = [];

    if (favorites != null) {
      console.log(movie)
      console.log(favorites)
      newFavList = [...favorites, movie];
    } else {
      newFavList = movie;
    }
    setFavorites(newFavList);
    saveUserDataToLocal(newFavList);
  };
  const removeFavoriteMovie = (movie) => {
    const removedOneMovie = favorites.filter(
      (favorite) => favorite.id !== movie.id
    );
    setFavorites(removedOneMovie);
    saveUserDataToLocal(removedOneMovie);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeader heading="Movies" />
        <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavOnClickFromApp={addFavoriteMovie}
          favoriteComp={AddFavMovieComponent}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeader heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavOnClickFromApp={removeFavoriteMovie}
          favoriteComp={RemoveFavMovieComponent}
        />
      </div>
    </div>
  );
}

export default App;
