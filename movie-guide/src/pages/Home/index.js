import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.css';

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    async function loadMovies(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: 1,
        }
      })
      
      // console.log(response.data.results.slice(0, 10))
      //using SLICE because the array returned from the API has a lot of movies. So I want to show only the first 10.
      setMovies(response.data.results.slice(0, 10));      

    }

    loadMovies();

  }, [])

  return(
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => {
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>
              <Link to={`/movie/${movie.id}`}>Info</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;