import './global.css'
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { MapPage } from './components/map/MapPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Login logic here, but no forced navigation
  };

  return (
    <>
      <Header onLogin={handleLogin} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  )
}

export default App
