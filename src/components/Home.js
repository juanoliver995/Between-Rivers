import LogoBrGrande from '../images/logo-br-grande.png'
import { Link } from 'react-router-dom'
import IconTicket from '../images/icon-ticket.png'
import useUser from '../hooks/useUser'
import useTicket from "../hooks/useTicket"
function Home() {
    const { login, isLogged } = useUser()
    const { createTicket, isTicket } = useTicket()

    
    return (
        <div className='container-home'>
            <div>
                <h1>Bienvenido</h1>
                <h3>Sitio Oficial</h3>
            </div>
            <div className="container-home_logo">
                <img src={LogoBrGrande} alt="logo between rivers"></img>
                <p>Productora de eventos</p>
            </div>
            <div className='container-btn-ticket'>
                {(!isLogged && isTicket) || (isLogged && !isTicket) 
                ? <Link className='button-ticket' to="/login"><img src={IconTicket} alt="icono de ticket"></img>Ver mi ticket</Link>
                :<Link className='button-ticket' to="/login"><img src={IconTicket} alt="icono de ticket"></img>Consigue tu ticket</Link>     
            }
            
            </div>
        </div>
    )
}

export default Home;