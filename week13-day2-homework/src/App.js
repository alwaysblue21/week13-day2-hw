import logo from './logo.svg';
import './App.css';
import Movies from "./components/Movies";

function App() {

  const movies = [
    {
      name: "300",
      year: "2006",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_.jpg"

    },
    {
      name: "Misery",
      year: "1990",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/91picvdmbJL._AC_UF894,1000_QL80_.jpg"

    },
    {
      name: "Catch Me If You Can",
      year: "2002",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg"

    },
    {
      name: "The Dark Knight",
      year: "2008",
      rating: "PG-13",
      image: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"

    },
    {
      name: "Spirited Away",
      year: "2001",
      rating: "PG",
      image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"

    },
  ]

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
