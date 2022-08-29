import soundcloud from "../images/soundcloud.png"
import spotify from "../images/spotify.png"
import youtube from "../images/youtube.png"
import instagram from "../images/instagram.png"
import { useState } from "react"
import Loader from './Loader'
const Artist = ({ artist }) => {
    
    return (
        <>
            <div className="container-artist">
                <div className="img-artist">
                    <img loading="lazy" src={artist?.urlImages?.img1} alt={artist.name} />
                </div>
                <div className="info-artist">
                    <h1>{artist.name}</h1>
                    <p>{artist.biografia}</p>
                    <div className="links-container">
                        {artist?.socialLinks?.soundCloud ? <a target="_blank" rel="noreferrer" href={artist?.socialLinks?.soundCloud}><img loading="lazy" src={soundcloud} alt="soundcloud"></img></a> : ""}
                        {artist?.socialLinks?.youTube ? <a target="_blank" rel="noreferrer" href={artist?.socialLinks?.youTube}><img loading="lazy" src={youtube} alt="youtube"></img></a> : ""}
                        {artist?.socialLinks?.spotify ? <a target="_blank" rel="noreferrer" href={artist?.socialLinks?.spotify}><img loading="lazy" src={spotify} alt="spotify"></img></a> : ""}
                        {artist?.socialLinks?.instagram ? <a target="_blank" rel="noreferrer" href={artist?.socialLinks?.instagram}><img loading="lazy" src={instagram} alt="instagram"></img></a> : ""}
                    </div>
                </div>
            </div>
            <div className="galeri-container">
                <div className="galeri">
                    {artist?.urlImages?.img2 ? <img loading="lazy" src={artist?.urlImages?.img2} alt={artist.name}></img> : ""}
                    {artist?.urlImages?.img3 ? <img loading="lazy" src={artist?.urlImages?.img3} alt={artist.name}></img> : ""}
                </div>
            </div>
        </>
    )
}

export default Artist