export default function ticket({ nameTicket, numberTicket, email }) {
    return fetch("https://shrouded-dusk-50176.herokuapp.com/api/tickets", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nameTicket, numberTicket, email })
    })
        .then(res => {
            if (!res.ok) throw new Error('Response is NOT ok')
            return res.json()
        }).then(res => {
            return res
        })
}