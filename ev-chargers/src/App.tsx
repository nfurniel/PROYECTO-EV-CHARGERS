import './global.css'
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { MapPage } from './components/map/MapPage';
import { ChargersList } from './components/chargers/ChargersList';
import { Routes, Route } from 'react-router-dom';

function App() {
  const handleLogin = () => {
    console.log('Usuario logueado');
  };

  return (
    <>
      <Header onLogin={handleLogin} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chargers" element={<ChargersList />} />
      </Routes>
    </>
  )
}

export default App
