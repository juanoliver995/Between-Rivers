import Context from "../context/UserContext";
import { useCallback, useContext, useState } from "react";
import loguinServices from "../services/login";

export default function useUser(){
    const {user, setUser} = useContext(Context);
    const [state, setSate] = useState({
        error: true,
        loading: false
    })
    const login = useCallback(({username, password}) => {
        setSate({loading: true, error:false})
        loguinServices({username, password})
        .then(user => {
            if(user){
                setSate({ loading: false, error: false })
                setUser(user)
                window.localStorage.setItem('user', JSON.stringify(user))  
            }  
        })
        .catch(err => {
            setSate({ loading: false, error: true })
            window.localStorage.removeItem('user') 
            console.error(err)
        })
    },[setUser])

    return {
        isLogged: Boolean(user),
        login,
        hasLoginError: state.error,
        isLoginLoading: state.loading

    }
}