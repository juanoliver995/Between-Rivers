import { useState, useEffect } from 'react'
import useUser from '../hooks/useUser'
import {useNavigate} from 'react-router-dom'


const  LoguinUsers = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const{login, isLogged, hasLoginError} = useUser()
    let navigate = useNavigate()
    
    useEffect(()=> {
        if(isLogged){
            navigate('/card')
        }
    },[isLogged, navigate])

    const handleLoginSubmit = (e) => {
        try{
            e.preventDefault()
            login({ username, password })
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <div className='container-form'>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <h4>Invitados Especiales</h4>
                        <p>Si ya tienes cuenta inicia sesion</p>
                    </div>
                    <div className='form__group field'>
                        <input
                            className="form__field"
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
                        <label className="form__label">Username</label>
                    </div>
                    <div className='form__group field'>
                        <input
                            className="form__field"
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
                        <label className="form__label">Password</label>
                    </div>
                    {
                        !hasLoginError 
                        ? 
                            <p className='error'>Username o Password incorrectas</p>
                        
                        : ""
                    }
                    <div>
                        <button className="btn-form">Login</button>
                    </div>
                </form>
            </div> 
        </>
    )
}

export default LoguinUsers
