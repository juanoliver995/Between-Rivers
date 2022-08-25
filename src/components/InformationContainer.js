import { useEffect, useState } from 'react'
import Information from './Information'
import Loader from "./Loader"

const InformationContainer = () => {
    const [artists, setArtists] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://shrouded-dusk-50176.herokuapp.com/api/artists")
            .then(response => response.json())
            .then((data) => {
                setArtists(data)
                setLoading(false)
            })
    }, []);

    return (
        <div className="container-informacion">
            {loading ? <Loader /> : <Information artists={artists} />}
        </div>
    )
}

export default InformationContainer;