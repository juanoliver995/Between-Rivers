export default function getAllTicket(){
    return fetch("https://shrouded-dusk-50176.herokuapp.com/api/tickets")
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok')
            return res.json()
        }).then(res => {
            return res
        })
}
