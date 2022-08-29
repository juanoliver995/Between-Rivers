import Ticket from './Ticket';
import SocialShareTicket from './SocialShareTicket';

function ContainerTicket() {
    return (
            <div className='container-main'>
                <Ticket />
                <SocialShareTicket />
            </div>
    )
}

export default ContainerTicket;