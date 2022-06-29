import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Popular from "./Popular";

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Home() {
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1)
  // const [loading, setLoading] = useState(true);

  // useEffect(()=> {
  //   async function loadMovies(){
  //     const response = await api.get("movie/popular", {
  //       params: {
  //         api_key: "1f6b33fb81a101dccbcc1b538423c585",
  //         page: page,
  //       }
  //     })
      
  //     if (page !== response.data.total_pages && page < 5) {
  //       let sumPage = page + 1;
  //       setPage(sumPage);
        
  //     }
  //     setMovies(prev => [...prev, ...response.data.results]);
      
  //     setLoading(false);
  //   }

  //   loadMovies();

  // }, [page])

  // if(loading) {
  //   return(
  //   <div className="loading">
  //     <h1>Loading...</h1>
  //   </div>
  //   )
  // }

  return(
    <Popular/>
  );
}

export default Home;