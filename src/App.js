import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=d4f715d0';


function App() {
  const [moives, setMovies] = useState([]);
  const [search , setSearch] = useState('');

  const searchMoive = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMoive('');
  }, []);
  return (
    <div className="app">
      <h1>Cinematic Connections</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <img src={SearchIcon} alt='search' onClick={() => searchMoive(search)} />
      </div>

      {
        moives?.length > 0 ? (
          <div className='container'>
            {
              moives.map((movie) => (
                <MovieCard movie={movie} />
              ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No moives found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
