import Movie from "./Movie"

function Movies(props) {
    return (
        <div className="Movies">
            <h1>Movies</h1>

            <div className="MoviesPlate">
                {props.movies.map((item, index) => {
                    return <Movie movie={item} key={item.name} />
                })}
            </div>
        </div>
    )
}

export default Movies;