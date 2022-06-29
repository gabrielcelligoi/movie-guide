import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Popular from "./Popular";

// API URL: movie/now_playing?api_key=1f6b33fb81a101dccbcc1b538423c585

function Home() {

  return(
    <Popular />
  );
}

export default Home;