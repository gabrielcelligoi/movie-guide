import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './popular.css';
import Selector from "./Selector";

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Popular() {
  const [movies, setMovies] = useState([]);
  const [content, setContent] = useState('movie')
  

  useEffect(()=> {
    async function loadMovies(){
      const response = await api.get(`${content}/popular`, {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: 1,
        }
      })      
      
      setMovies(response.data.results);
      
    }

    loadMovies();

  }, [content])

 

  return(
    <div className="container">
      <div className="header-container">
        <h2>Most Popular</h2>
        < Selector
          content={content}
          setContent={setContent}
        />
      </div>

      <div className="fade"></div>
      
      <div>
        <div className="movies-list">        
          {movies.map((movie) => {
            return(
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
                </Link>
                <h2>{movies.indexOf(movie)+1}</h2>
                <strong>{movie.title ? movie.title : movie.name}</strong>              
              </div>
            )
          })}
        </div>
    </div>

    </div>
  );
}

export default Popular;