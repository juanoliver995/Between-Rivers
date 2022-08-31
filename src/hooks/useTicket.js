import Context from "../context/TicketContext";
import { useCallback, useContext } from "react";
import ticketServices from "../services/ticket";

export default function useTicket() {
    const { ticket, setTicket } = useContext(Context);
    const createTicket = useCallback(({ nameTicket, numberTicket, email }) => {
        ticketServices({ nameTicket, numberTicket, email })
            .then(ticket => {
                if(ticket){
                    window.localStorage.setItem('ticket', JSON.stringify(ticket))
                    setTicket(ticket)
                }
            })
            .catch(err => {
                window.localStorage.removeItem('user')
                console.error(err)
            })
    }, [setTicket])

    return {
        isTicket: Boolean(ticket),
        createTicket
    }
}