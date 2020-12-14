const MovieList = (props) => {
  const FavoriteComp = props.favoriteComp;
  return (
    <>
      {props.movies.map((movie, key) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="Movie" />
          <div onClick={() => props.handleFavOnClickFromApp(movie)} className="overlay d-flex align-items-center justify-content">
            <FavoriteComp />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
