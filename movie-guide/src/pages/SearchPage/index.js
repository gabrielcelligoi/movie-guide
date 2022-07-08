import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";

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
      <h1>{searchstring}</h1>
      <div className="movie-list">
        {searched.map(movie => {
          return(
            <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
                </Link>               
                <strong>{movie.title ? movie.title : movie.name}</strong>              
              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Searchpage;