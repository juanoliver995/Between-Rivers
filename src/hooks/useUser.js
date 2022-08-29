import Context from "../context/UserContext";
import { useCallback, useContext } from "react";
import loguinServices from "../services/login";

export default function useUser(){
    const {user, setUser} = useContext(Context);
    const login = useCallback(({username, password}) => {
        loguinServices({username, password})
        .then(user => {
            window.localStorage.setItem('user', JSON.stringify(user))   
            setUser(user)
        })
        .catch(err => {
            window.localStorage.removeItem('user') 
            console.error(err)
        })
    },[setUser])

    return {
        isLogged: Boolean(user),
        login
    }
}