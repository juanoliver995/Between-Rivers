function HeaderCard({user}) {
    
    const numberConverter=()=> {
        if(user.numberTicket < 10){
            return `000${user.numberTicket}`
        } else {
            return `00${user.numberTicket}`
        }
    }

    return (
        <div className='header-card'>
            <div className='header-name'>
                <div className='profile-photo'><img src={user.URLticket} alt="profile"></img></div> 
                <p>{user.fullName}</p>
            </div>
            <div className='header-ticket-number'>
                <p>TICKET NUMBER</p>
                <p><span># </span>{numberConverter()}</p>
            </div>
        </div>

    )
}

export default HeaderCard;