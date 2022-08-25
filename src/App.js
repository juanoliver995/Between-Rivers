import './App.css';
import 'atropos/css';
import Home from './components/Home';
import ContainerCard from './components/ContainerCard';
import Header from './components/Header';
import InformationContainer from './components/InformationContainer';
import ArtistDetail from './components/ArtistDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loguin from './components/Loguin';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<ContainerCard />} />
        <Route path="/information" element={<InformationContainer />} />
        <Route path="/artists/:artistId" element={<ArtistDetail />} />
        <Route path='/loguin' element={<Loguin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
