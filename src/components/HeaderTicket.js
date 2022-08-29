function HeaderTicket({ticket}) {

    const numberConverter = () => {
        if (ticket.numberTicket < 10) {
            return `000${ticket.numberTicket}`
        } else {
            return `00${ticket.numberTicket}`
        }
    }
    return (
            <div className='header-card'>
                <div className='header-name'> 
                    <p>birthday edit</p>
                </div>
                <div className='header-ticket-number'>
                    <p>TICKET NUMBER</p>
                <p><span># </span>{numberConverter()}</p>
                </div>
            </div>
    )
}

export default HeaderTicket;