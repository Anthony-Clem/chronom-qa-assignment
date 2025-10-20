import { useEffect, useState } from 'react';

function Favorite() {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Always load a husky image (breed: husky is a sub-breed of siberian? Actually dog.ceo uses 'husky' under 'husky')
    setLoading(true);
    fetch('https://dog.ceo/api/breed/husky/images/random')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch husky');
        return r.json();
      })
      .then(d => {
        if (d.status === 'success') {
          setImageUrl(d.message);
        } else {
          throw new Error('API status not success');
        }
      })
      .catch(e => setError(e.message || 'Unknown error'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="favorite centered-page">
      <h1>Favorite Dog Breed</h1>
      <h2>Husky</h2>
      {error && <div role="alert" style={{background:'#ffeeee', color:'#a00000', padding:'0.5rem 0.75rem', borderRadius:'4px', fontSize:'.8rem'}}>{error}</div>}
      <div className="image-frame" style={{marginTop:'1rem'}}>
        {loading && <div style={{padding:'2rem', fontSize:'.9rem', color:'var(--text-light)'}}>Loading husky image…</div>}
        {!loading && imageUrl && <img src={imageUrl} alt="husky" style={{maxWidth:'100%', borderRadius:'8px'}} />}
        {!loading && !imageUrl && !error && <div style={{padding:'2rem', fontSize:'.85rem', color:'var(--text-light)'}}>No image yet.</div>}
      </div>
    </div>
  );
}

export default Favorite;
