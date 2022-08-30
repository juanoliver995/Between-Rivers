import 'atropos/css';
import Atropos from 'atropos/react';
import HeaderTicket from './HeaderTicket';
import Context from '../context/TicketContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
function Ticket() {
    const { ticket, setTicket } = useContext(Context)
    const { idTicket } = useParams()
    console.log(ticket)
    return (
            <Atropos duration={500} highlight={true} shadow={false} className="elAtropos">
                    <div className='container-main-ticket'>
                        <div className='container-ticket'>
                            <div className='card'>
                                 <HeaderTicket ticket={ticket} /> 
                                <div className='main-ticket'>
                                    <h1 data-atropos-offset="10" data-atropos-opacity="0.9;1">between rivers</h1>
                                    <div data-atropos-offset="-2">
                                        <p data-atropos-offset="5">OCTUBRE 01 • GUALEGUAYCHU • 01AM</p>
                                    </div>
                                </div>
                                <div className='footer-card' data-atropos-offset="8">
                                <h3>{ticket.nameTicket}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Atropos>
    )
}

export default Ticket;