import { Link } from "react-router-dom";

function Error(){
  return(
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to={"/"}>Take a look into the movies available</Link>
    </div>
  )
}

export default Error;