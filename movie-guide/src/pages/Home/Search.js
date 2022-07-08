import './search.css'

function Search() {
  return (
    <div className='search'>
      <form>
        <input type="text" placeholder='Search for a movie or TV show'/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search;