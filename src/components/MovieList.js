const MovieList = (props) => {
  const FavoriteComp = props.favoriteComp;

  return (
    <>
         {props.movies && props.movies.map ?  props.movies.map((movie, key) => (
        <div key={key} className="image-container d-flex justify-content-start mb-3">
          {<img  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie" />}
          
          <div onClick={() => props.handleFavOnClickFromApp(movie)} className="overlay d-flex align-items-center justify-content">
            <FavoriteComp />
          </div>
        </div>
      )) : null}
  
    
    </>
  );
};

export default MovieList;
