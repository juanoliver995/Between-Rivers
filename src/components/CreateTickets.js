import { useState, useEffect } from "react"
import getAllTicket from "../services/getAllTickets"
import useTicket from "../hooks/useTicket"
import { useNavigate } from "react-router-dom"
const CreateTickets = () => {
    const [nameTicket, setName] = useState('')
    const [email, setEmail] = useState('')
    const[tickets, setTickets] = useState([])
    const { createTicket, isTicket } = useTicket()
     let navigate = useNavigate()

    useEffect(() => {
        if(isTicket){
            navigate(('/ticket'))
        }else{
            getAllTicket()
                .then(tickets => {
                    setTickets(tickets)
                })
                .catch(err => {
                    console.error(err)
                })
        }  
    }, [isTicket, navigate])

    const numberTicket = tickets.length + 1

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        createTicket({ nameTicket, numberTicket, email })
    }
    return(
        <div className="container-form">
        <form onSubmit={handleLoginSubmit}>
            <div>
                <h4>Crear Ticket</h4>
                <p>Si no tiene cuenta crea tu ticket</p>
            </div>
            <div className='form__group field'>
                <input
                    className="form__field"
                    type="text"
                    value={nameTicket}
                    name="Ingresa tu nombre"
                    placeholder="Ingresa tu nombre"
                    required
                    pattern="[a-zA-Z ]{2,254}"
                    onChange={({ target }) => {
                        setName(target.value)
                    }}
                />
                <label className="form__label">Nombre</label>
            </div>
                <div className='form__group field'>
                    <input
                        className="form__field"
                        type="email"
                        value={email}
                        name="Ingresa tu email"
                        placeholder="Ingresa tu email"
                        required
                        onChange={({ target }) => {
                            setEmail(target.value)
                        }}
                    />
                    <label className="form__label">Email</label>
                </div>
            <div>
                <button className="btn-form">Create</button>
            </div>
        </form> 
        </div> 
    )
}

export default CreateTickets