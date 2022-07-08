import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites"
import SearchPage from "./pages/SearchPage";

import Header from "./components/Header";

function RoutesApp() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/movie/:id" element={ <Movie/> }/>
        <Route path="/favorites" element={ <Favorites/> }/>
        <Route path="/searchpage/:searchstring" element={ <SearchPage /> } />

        {/* Route for path not found. It has to be the last route! */}
        <Route path="*" element={ <Error/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;