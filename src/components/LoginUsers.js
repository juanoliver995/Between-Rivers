import { useState, useEffect } from 'react'
import useUser from '../hooks/useUser'
import {useNavigate} from 'react-router-dom'

const  LoguinUsers = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const{login, isLogged} = useUser()
    let navigate = useNavigate()
    
    
    useEffect(()=> {
        if(isLogged){
            navigate('/card')
        }
    },[isLogged, navigate])

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }

    return (
        <div className='container-form'>
         <form onSubmit={handleLoginSubmit}>
                        <div>
                            <h4>Invitados Especiales</h4>
                            <p>Si ya tienes cuenta inicia sesion</p>
                         </div>
                        <div>
                        <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                name="username"
                                placeholder="username"
                                required
                                pattern="[a-zA-Z ]{2,254}"
                                onChange={({ target }) => {
                                    setUsername(target.value)
                                }}
                            />
                        </div>
                        <div>
                        <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                name="password"
                                placeholder="password"
                                required
                                pattern='[a-zA-Z ]{2,254}'
                                onChange={({ target }) => {
                                    setPassword(target.value)
                                }}
                            />
                        </div>
                        <div>
                        <button className="btn-form">Loguin</button>
                        </div>
            </form> 
        </div> 
    )
}

export default LoguinUsers
