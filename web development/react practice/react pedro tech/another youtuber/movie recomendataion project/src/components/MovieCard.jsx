function MyMovieList({movie}){
    return (
        <>
            <h1>{movie.title}</h1>
            <p>{movie.rating}</p>
            <p>{movie.genre}</p>
        </>
    )
}

export default MyMovieList