import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import useTicket from "../hooks/useTicket"
import LoginUser from "./LoginUsers"
import CreareTickets from "./CreateTickets"
const ContainerLogin = () => {
    const { login, isLogged } = useUser()
    let navigate = useNavigate()
    const { createTicket, isTicket } = useTicket()

    useEffect(() => {
        if (isLogged) {
            navigate('/card')
        } else if (isTicket) {
            navigate('/ticket')
        }
    }, [isLogged, navigate, isTicket])
    return (
        <div className='container_login'>
            <LoginUser/>
            <CreareTickets/>
        </div>
    )
}

export default ContainerLogin