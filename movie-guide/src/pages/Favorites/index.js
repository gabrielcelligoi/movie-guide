import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favorites.css'

function Favorites() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@movieguide");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let filteredMovies = movies.filter((movie) => {
      return(movie.id !== id)
    })

    setMovies(filteredMovies);
    localStorage.setItem("@movieguide", JSON.stringify(filteredMovies))
  }

  return(
    <div className='my-movies'>
      <h1>My Movies</h1>

      {movies.length === 0 && <span>You don't have any favorite movie ;(</span>}

      <ul>
        {movies.map((movie) => {
          return(
            <li key={movie.id}>
              <span>{movie.title}</span>

              <div>
                <Link to={`/movie/${movie.id}`}>Details</Link>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorites;