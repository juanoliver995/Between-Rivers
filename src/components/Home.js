import LogoBrGrande from '../images/logo-br-grande.png'
import { Link } from 'react-router-dom'
import IconTicket from '../images/icon-ticket.png'
function Home() {
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
                <Link className='button-ticket' to="/card"><img src={IconTicket} alt="icono de ticket"></img>Consigue tu entrada</Link>
            </div>
        </div>
    )
}

export default Home;