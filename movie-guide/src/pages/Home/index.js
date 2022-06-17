import { useEffect, useState } from "react";
import api from "../../services/api";

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

      console.log(response.data.results);

    }

    loadMovies();

  }, [])

  return(
    <div>
      <h1>Welcome to Homepage</h1>
    </div>
  );
}

export default Home;