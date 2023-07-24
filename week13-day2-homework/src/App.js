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
      name: "xxxxxxxxxxxxxxxxx",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "xxxxxxxxxxxxxxxxx",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "xxxxxxxxxxxxxxxxx",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
    {
      name: "xxxxxxxxxxxxxxxxx",
      year: "2222",
      rating: "G",
      image: "https://www.something.com/image.png"

    },
  ]

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
