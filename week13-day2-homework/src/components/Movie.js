function Movie(props) {
    return (
        <div>
            <h2 className="title">hi</h2>
            <img className="image" src={props.movie.image} alt={props.movie.image} />
            <div className="movieInfo">
                <p>1</p>
                <p>2</p>
            </div>
        </div>
    )
}

export default Movie;