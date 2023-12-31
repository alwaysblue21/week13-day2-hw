function Movie(props) {
    return (
        <div>
            <h2 className="title">{props.movie.name}</h2>
            <img className="image" src={props.movie.image} alt={props.movie.image} />
            <div className="movieInfo">
                <p>Year: {props.movie.year}</p>
                <p>Rated: {props.movie.rating}</p>
            </div>
        </div>
    )
}

export default Movie;