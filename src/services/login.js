export default function login ({username, password}){
    return fetch("https://shrouded-dusk-50176.herokuapp.com/api/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    .then(res=> {
        if(!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res=> {
        return res
    })
}