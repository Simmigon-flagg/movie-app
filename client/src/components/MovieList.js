const MovieList = (props) => {
    return (<>
        {props.movies.map((movie, key) => 
        <div>
            <img src={movie.Poster}  />
        </div>)}
    </>);
}
 
export default MovieList;