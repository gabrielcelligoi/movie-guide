import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favorites.css'

function Favorites() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movieguide");
    setMovies(JSON.parse(myList) || []);
  }, []);

  return(
    <div className='my-movies'>
      <h1>My Movies</h1>

      <ul>
        {movies.map((movie) => {
          return(
            <li key={movie.id}>
              <span>{movie.title}</span>

              <div>
                <Link to={`/movie/${movie.id}`}>Details</Link>
                <button>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorites;