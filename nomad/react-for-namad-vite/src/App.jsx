import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
        await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    ).data;
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
      <div>
        {loading ? <h1>Loading...</h1> : (
            movies.map((movie) => (
                <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <img src={movie.medium_cover_image} alt={movie.title}/>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((g, index) => <li key={index}>{g}</li>)}
                  </ul>
                </div>))
        )}
      </div>
  );
}

export default App;
