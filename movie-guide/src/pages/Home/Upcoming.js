import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

import './upcoming.css';

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);

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

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsChevronRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <BsChevronLeft />
      </div>
    )
  }
  
  const small = window.matchMedia("(max-width: 600px)");

  const settings = {
    infinite:true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next),
  }

  if (small.matches) {
    settings.slidesToShow = 1;
  }

  useEffect(()=> {
    async function loadMovies(){
      await api.get("movie/upcoming", {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: page,
        }
      })
      .then((response) => {
        
        let filteredMovies = response.data.results.filter(movie => 
          movie.release_date >= today && movie.release_date <= releaseLimit && movie.original_language === "en"
        )
        setMovies(prev => [...prev, ...filteredMovies])

        //fetch 5 pages of data
        if (page !== response.data.total_pages && page < 5) {
          let sumPage = page + 1;
          setPage(sumPage);
        }
        
      })
    }

    loadMovies();
    
  }, [page])

  

  return(
    
    
    <div className="upcoming-list">
      <div><h2>Coming Soon</h2></div>
      <Slider {...settings}>
      {movies.map((movie, idx) => {
          return(
            <div key={movie.id} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
              </Link>
              <strong>{movie.release_date}</strong>
            </div>
          )
      })}
      </Slider>
    </div>
    
    
  );
}

export default Upcoming;



// return(
//   <div className="container">
//     <div className="header-container">
//       <h2>Upcoming Movies</h2>
//     </div>

//     <div>
//       <div className="movies-list">
//         {movies.map((movie) => {
//           if(movie.release_date >= today && movie.release_date <= releaseLimit && movie.original_language === "en"){
//             return(
//               <div key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>
//                   <img src={`http://image.tmdb.org//t/p/original/${movie.poster_path}`} alt={movie.title}/>                
//                 </Link>
//                 <strong>{movie.title}</strong>
//                 <strong>{movie.release_date}</strong>
//               </div>
//             )
//           }
//         })}
//       </div>
//     </div>
//   </div>
// );