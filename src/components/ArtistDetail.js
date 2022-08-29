import Artist from "./Artist";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Loader from "./Loader";

const ArtistDetail = () => {
    const [artist, setartist] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        setLoading(true)
        fetch(`https://shrouded-dusk-50176.herokuapp.com/api/artists/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setartist(data)
                setLoading(false)
            })
    }, [id]);

    return (
        <div>
            {
                loading ? <Loader /> : <Artist artist={artist} />
            }

        </div>
    )

}

export default ArtistDetail


