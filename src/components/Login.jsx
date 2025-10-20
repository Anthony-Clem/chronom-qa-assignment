import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users.json');
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        navigate('/breeds');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Error loading users');
    }
  };

  return (
    <div className="login centered-page">
      <h1>Login</h1>
      <div className="card" style={{maxWidth:'440px', width:'100%'}}>
        <form onSubmit={handleSubmit} className="card-form" noValidate>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">Sign In</button>
          {error && <div className="error" role="alert">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;