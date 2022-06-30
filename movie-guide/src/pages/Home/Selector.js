import './selector.css';

function Selector(props) {
  let movieSelection = 'button';
  let tvSelection = 'button';

  if(props.content === 'movie') {
    movieSelection = 'button--selected';
    tvSelection = 'button';
  }

  if(props.content === 'tv') {
    movieSelection = 'button';
    tvSelection = 'button--selected';
  }

  return (
    <div className='selectors'>
      <li>
        <ul
          className={movieSelection}
          onClick={() => props.setContent('movie')}
        >
          Movies
        </ul>
        <ul
          className={tvSelection}
          onClick={() => props.setContent('tv')}
        >
          TV
        </ul>
      </li>
   </div>
  )
}

export default Selector;