import axios from "axios";

// URL bases: https://api.themoviedb.org/3/
// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;