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

  function saveMovie() {
    // take the list on localstorage and saves it on a variable
    const myList = localStorage.getItem("@movieguide");

    // take the myList variable, convert it to a string and saves it to a variable named savedMovies. If the myList variable doesnt exist, it saves an empty array to savedMovies variable
    let savedMovies = JSON.parse(myList) || [];

    // create a variable hasMovie. savedMovies.some will return true if savedMovie.id === movie.id
    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id)

    if(hasMovie) {
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@movieguide", JSON.stringify(savedMovies));

  }

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
        <button onClick={saveMovie}>Save</button>
        <button>
          {/* target=_blank for open the link in another tab and rel=external to inform broser engines that this is an external link*/}
          <a target="_blank" rel="external" href={`http://youtube.com/results?search_query=${movie.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  );
}

export default Movie;