import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './popular.css';

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Popular() {
  const [movies, setMovies] = useState([]);
  

  useEffect(()=> {
    async function loadMovies(){
      const response = await api.get("movie/popular", {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: 1,
        }
      })      
      
      setMovies(prev => [...prev, ...response.data.results]);
      
    }

    loadMovies();

  }, [])

 

  return(
    <div className="container">
      <h2>Most Popular</h2>
      <div className="movies-list">
        {movies.map((movie) => {
          return(
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
              </Link>
              <h2>{movies.indexOf(movie)+1}</h2>
              <strong>{movie.title}</strong>              
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Popular;