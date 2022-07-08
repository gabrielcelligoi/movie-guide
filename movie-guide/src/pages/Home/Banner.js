import { useState, useEffect } from 'react';
import api from '../../services/api';
import Search from './Search';
import './banner.css'

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    async function loadMovies(){
      const response = await api.get(`movie/popular`, {
        params: {
          api_key: "1f6b33fb81a101dccbcc1b538423c585",
          page: 1,
        }
      })
      .then((response) => {
        setMovies(response.data.results);
      })
    }
    
    loadMovies();
    
  }, [])
  
  const images = [];

  movies.map((movie) => {
    images.push(movie.backdrop_path)
  })


  //randomize the image in banner
  if(images.length !== 0){
    let randomChange = document.getElementById('randomChange')
    const imgCount = images.length;
    let number = Math.floor(Math.random() * imgCount)
    
    function imgDisp(num) {
      randomChange.style.backgroundImage = `linear-gradient(to right, rgba(13, 28, 59, 0.7), rgb(66, 74, 184, 0.7)), url(http://image.tmdb.org/t/p/original/${images[number]})`
    }
   
    imgDisp()
  }
 
  return(
    <div className='banner-container'  id='randomChange'>
      <h2>Explore Now</h2>      
      <Search />      
    </div>
  )
}

export default Banner;