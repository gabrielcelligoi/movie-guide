import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './searchpage.css'


function Searchpage() {
  const { searchstring } = useParams();
  const [ searched, setSearched ] = useState([]);

  useEffect(() => {
    async function loadSearch(){
      const response = await api.get('search/multi', {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          query: searchstring,
        }
      })
      setSearched(response.data.results);
    }
    loadSearch();
  }, [])

  return(
    <div>      
      <div className="movie-list">
        {searched.map(movie => {
          return(
            <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
                </Link>               
                <div className="description">
                  <strong>{movie.title ? movie.title : movie.name}</strong>
                  <h4>{movie.release_date}</h4>
                  <p>{movie.overview}</p>
                </div>           
              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Searchpage;