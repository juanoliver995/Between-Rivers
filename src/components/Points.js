import whatsapp from "../images/whatsapp.png"
import instagram from "../images/instagram.png"
function Points ({point}){
    return(
        <div className="firstAnimation">
            <div className="secondAnimation">
                <div className="card-points">
                <div className="header-points-card">
                    <p>{point.city}</p>
                    <small>Entre Rios</small>
                </div>
                <h4>{point.name}</h4>
                <div className="logos_points">
                    {
                     point.wpLink ? <a className="wp-point" href={point.wpLink} target="_blank" rel="noreferrer"><img src={whatsapp} alt="logo de whatsapp"></img></a> : ""
                    }
                    <a className="ig-point" href={point.igLink} target="_blank" rel="noreferrer"><img src={instagram} alt="logo de instagram"></img></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Points