import './App.css';
import 'atropos/css';
import Home from './components/Home';
import ContainerCard from './components/ContainerCard';
import Header from './components/Header';
import InformationContainer from './components/InformationContainer';
import ArtistDetail from './components/ArtistDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContainerLogin from './components/ContainerLogin';
import LoguinUsers from './components/LoginUsers';
import CreateTickets from './components/CreateTickets';
import {UserContextProvider} from './context/UserContext'
import { TicketContextProvider } from './context/TicketContext'
import ContainerTicket from './components/ContainerTicket'
import Entradas from './components/pages/Entradas';
function App() {

  return (
    <UserContextProvider>
    <TicketContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<InformationContainer />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path='/login' element={<ContainerLogin />} />
          <Route path='/loginUser' element={<LoguinUsers/>}/>
          <Route path='/createTickets' element={<CreateTickets />} />
          <Route path="/card" element={<ContainerCard />}/>
          <Route path="/ticket" element={<ContainerTicket />} />
            <Route path="/entradas" element={<Entradas />} />
        </Routes>
    </BrowserRouter>
    </TicketContextProvider>
    </UserContextProvider>
  );
}

export default App;
