import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie.jsx";

export default function Home() {
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
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImage={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))
        )}
      </div>
  );
}