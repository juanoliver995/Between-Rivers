import './App.css';
import 'atropos/css';
import Home from './components/Home';
import ContainerCard from './components/ContainerCard';
import Header from './components/Header';
import Information from './components/Information';
import ArtistDetail from './components/ArtistDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loguin from './components/Loguin';
import { useEffect, useState } from 'react'

function App() {

  const [artists, setArtists] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/api/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data)
      })
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<ContainerCard />} />
        <Route path="/information" element={<Information />} />
        <Route path="/artists/:artistId" element={<ArtistDetail artists={artists} />} />
        <Route path='/loguin' element={<Loguin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
