import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './popular.css';

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth()+1;
  let nextMonth = date.getMonth()+2;
  let day = date.getDate();

  if(month < 10) {
    month = `0${month}`;
  }

  if(nextMonth < 10) {
    nextMonth = `0${nextMonth}`;
  }

  if(day < 10) {
    day = `0${day}`
  }

  const today = `${year}-${month}-${day}`;
  const releaseLimit = `${year}-${nextMonth}-${day}`;


  useEffect(()=> {
    async function loadMovies(){
      const response = await api.get("movie/upcoming", {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: page,
        }
      })
      
      //fetch 5 pages of data
      if (page !== response.data.total_pages && page < 5) {
        let sumPage = page + 1;
        setPage(sumPage);        
      }

      setMovies(prev => [...prev, ...response.data.results]);
      
    }

    loadMovies();
    
  }, [page])

 

  return(
    <div className="container">
      <div className="header-container">
        <h2>Upcoming Movies</h2>
      </div>
      <div className="movies-list">
        {movies.map((movie) => {
          if(movie.release_date >= today && movie.release_date <= releaseLimit && movie.original_language === "en"){
            return(
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
                </Link>
                <strong>{movie.title}</strong>
                <strong>{movie.release_date}</strong>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
}

export default Upcoming;