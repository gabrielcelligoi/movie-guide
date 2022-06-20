import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error";

import api from "../../services/api";

import './movie.css'

function Movie() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadMovie() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: '1f6b33fb81a101dccbcc1b538423c585'
        }
      })
      .then((response) => {        
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {        
        setError(true);
      })
    }

    loadMovie();

    return () => {
      console.log('component desassembled')
    }

  }, [id]);

  if(error) {
    return(
      <Error/>
    )
  }

  if(loading) {
    return(
    <div className="loading">
      <h1>Loading...</h1>
    </div>
    )
  }

  return(
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img src={`http://image.tmdb.org//t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
      
      <h3>Overview</h3>
      <span>{movie.overview}</span>
      <strong>Vote Average: {movie.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Save</button>
        <button>
          <a href={`http://youtube.com/results?search_query=${movie.title}`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  );
}

export default Movie;