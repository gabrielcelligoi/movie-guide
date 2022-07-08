import { useParams } from "react-router-dom";

function Searchpage() {
  const { searchstring } = useParams();
  console.log(searchstring)
  return(
    <div>
      <h1>{searchstring}</h1>
      
    </div>
  )
}

export default Searchpage;