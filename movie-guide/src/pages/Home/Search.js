import { useState } from 'react';
import './search.css'

function Search() {
  const [searchString, setSearchString] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    console.log(searchString);
  }

  return (
    <div className='search'>
      <form>
        <input
          type="text"
          id='search-field'
          placeholder='Search for a movie or TV show'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type='submit' onClick={handleClick}>Search</button>
      </form>
    </div>
  )
}

export default Search;