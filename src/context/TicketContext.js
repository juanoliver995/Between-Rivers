import React, { useState } from 'react'

const Context = React.createContext({})

export function TicketContextProvider({ children }) {
    const [ticket, setTicket] = useState(() => JSON.parse(localStorage.getItem('ticket')))
    return <Context.Provider value={{ ticket, setTicket }}>
        {children}
    </Context.Provider>
}
export default Context