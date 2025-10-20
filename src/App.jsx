import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Breeds from './components/Breeds';
import Favorite from './components/Favorite';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
