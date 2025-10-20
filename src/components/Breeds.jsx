import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [randomBreed, setRandomBreed] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState({});
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState({});
  

  useEffect(() => {
    fetch('/breeeeeds.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to load breeds list');
        return response.json();
      })
      .then(data => {
        setBreeds(Array.isArray(data) ? data : []);
        setError(null);
      })
      .catch((err) => {
        setBreeds([]);
        setError(err.message || 'Unable to fetch breeds');
      });
  }, []);

  const handleBreedClick = async (breed) => {
    setSelectedBreed(breed);
    if (breeds.length) {
      const picked = breeds[Math.floor(Math.random() * breeds.length)];
      setRandomBreed(picked);
    } else {
      setRandomBreed(null);
    }
    setLoading(true);
    setImageUrl('');
    setError(null); // reset error before new fetch
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      if (!response.ok) throw new Error('Image fetch failed');
      const data = await response.json();
      if (data.status === 'success') {
        setImageUrl(data.message);
      } else {
        throw new Error('API returned an error status');
      }
    } catch (err) {
      setError(err.message || 'Problem fetching image');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (breed) => {
    // TODO: Make this persistent before release!!!
    setLiked(prev => ({ ...prev, [breed]: !prev[breed] }));
  };

  return (
    <div className="breeds centered-page">
      <h1>Fish Breeds</h1>
      <div style={{marginBottom:'1rem'}}>
        <Link to="/favorite" style={{textDecoration:'none'}}>
          <button type="button" className="breed-chip">Show favorite</button>
        </Link>
      </div>
      {error && (
        <div role="alert" className="error-banner" style={{background:'#ffefef', color:'#b00020', padding:'0.75rem 1rem', borderRadius:'6px', marginBottom:'1rem', fontSize:'.85rem'}}>
          {error}
        </div>
      )}
      <ul className="breeds-grid">
        {breeds.map(breed => (
          <li key={breed} className="breed-pair">
            <button className="breed-chip" onClick={() => handleBreedClick(breed)}>{breed}</button>
            <button
              type="button"
              onClick={() => handleLike(breed)}
              className={"like-inline" + (liked[breed] ? " active" : "")}
              aria-pressed={liked[breed] ? 'true' : 'false'}
            >{liked[breed] ? 'Liked' : 'Favorite'}</button>
          </li>
        ))}
      </ul>
      {selectedBreed && (
        <div className="image-shell">
          <h2>{randomBreed ? randomBreed.toUpperCase() : ''}</h2>
          <div className="image-frame">
            {loading && (
              <div style={{padding:'2.5rem', textAlign:'center', fontSize:'.9rem', color:'var(--text-light)'}}>
                Fetching a random {selectedBreed} image…
              </div>
            )}
            {!loading && imageUrl && (
              <img src={imageUrl} alt={selectedBreed} />
            )}
            {!loading && !imageUrl && (
              <div style={{padding:'2.5rem', textAlign:'center', fontSize:'.85rem', color:'var(--text-light)'}}>
                No image loaded yet.
              </div>
            )}
          </div>
          <div style={{fontSize:'.7rem', color:'var(--text-light)'}}>Images come from dog.ceo API</div>
        </div>
      )}
    </div>
  );
}

export default Breeds;