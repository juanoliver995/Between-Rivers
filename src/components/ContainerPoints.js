import getAllPoints from "../services/getAllPoints"
import {useEffect, useState} from 'react'
import Points from "./Points"
function ContainerPoints () {
    const [points, setPoints] = useState([])

    useEffect(()=> {
        getAllPoints()
        .then(points => setPoints(points))
        .catch(error => console.error(error))
    },[setPoints])


    return (
        <div className="container-points-main">
            <h2>Puntos de venta</h2>
            <div className="container-points">
                {
                     points.map(point => <Points key={point.name} point={point}/>)
                }
            </div>
        </div>
    )
}

export default ContainerPoints