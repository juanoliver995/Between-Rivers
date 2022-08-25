import { Link } from "react-router-dom"

const Information = ({ artists }) => {

    const andres = artists.find(artist => artist.name === "Andres Koller")
    const geronimo = artists.find(artist => artist.name === "Geronimo Gonzalez")
    const facundo = artists.find(artist => artist.name === "Facundo Asin")
    const luciano = artists.find(artist => artist.name === "Luciano Vidal")
    const gabriel = artists.find(artist => artist.name === "Gabriel Rojas")


    return (
        <>
            <div className="header-informacion">
                <div className='header-tittle'>
                    <h1>En esta seccion encontraras toda la informacion sobre nuestro evento</h1>
                </div>
                <div>
                    <p>Intenta <span>interactuar</span> con el flyer del evento para conseguir la informacion que necesites.</p>
                    <p>Puedes <span>clickear</span> los elementos para obtener informacion sobre los artistas, horarios, ubicacion y nuestros sponsors.</p>
                </div>
            </div>
            <div className="container-bg">
                <div className="container_flyer">
                    <div className='logo-br-mobile'>
                        <a href='https://www.instagram.com/betweenrivers___/?hl=es-la' target="_blank" rel='noreferrer'><img src='images/logo-br-grande.png' alt='logo between rivers'></img></a>
                        <p>BIRTHDAY EDIT</p>
                    </div>
                    <div className="container_fyer-main">
                        {andres ? <Link to={`/artists/${andres.id}`}><img src="images/andres-flyer.png" alt="andres koller"></img></Link> : ""}
                    </div>
                    <div className="container_flyer-secondary">
                        <div className='logo-br-desktop'>
                            <a href='https://www.instagram.com/betweenrivers___/?hl=es-la' target="_blank" rel='noreferrer'><img src='images/logo-br-grande.png' alt='logo between rivers'></img></a>
                            <p>BIRTHDAY EDIT</p>
                        </div>
                        <div className='container-djs'>
                            <div className='warm-up'>
                                <h3>Warm up</h3>
                                <div className='container-warm-up'>
                                    {geronimo ? <Link to={`/artists/${artists[1].id}`}>Geronimo Gonzalez</Link> : ""}
                                    <span>&</span>
                                    {facundo ? <Link to={`/artists/${artists[2].id}`}>Facundo Asin</Link> : ""}
                                </div>
                            </div>
                            <div className='opening'>
                                <h3>Opening</h3>
                                <div className='container-opening'>
                                    {luciano ? <Link to={`/artists/${artists[3].id}`}> Luciano Vidal</Link> : ""}
                                    <span>&</span>
                                    {gabriel ? <Link to={`/artists/${artists[4].id}`}> Gabriel Rojas</Link> : ""}
                                </div>
                            </div>
                        </div>
                        <div className='footer-flyer'>
                            <div className='container-date'>
                                <a className="fecha" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N3FyZHZzdmZ0ZnRxMzN1OWxsYnFzcTkwbGsgcGtydXZic29zdGlzZ3RrZnBzYjBkMWlvdWdAZw&amp;tmsrc=pkruvbsostisgtkfpsb0d1ioug%40group.calendar.google.com" rel="noreferrer" ><h3>01 DE OCTUBRE</h3></a>
                                <a className='ubi' href='https://goo.gl/maps/kNUQ8RRCSBevZRK46' target="_blank" rel='noreferrer'><h3 >25 DE MAYO 175 - GUALEGUAYCHU - ENTRE RIOS</h3></a>
                            </div>
                            <div className='container-sponsor'>
                                <div><a href='https://www.instagram.com/ghetto.gchu/?hl=es-la' target="_blank" rel='noreferrer'><img title='Ghetto' src='images/sponsor/ghettito30.png' alt='sponsor'></img></a></div>
                                <div><a href='https://www.instagram.com/herzbooking/?hl=es-la' target="_blank" rel='noreferrer'><img title='Herz Booking' src='images/sponsor/herz-booking.png' alt='sponsor'></img></a></div>
                                <div><a href='https://www.instagram.com/herederogin/?hl=es-la' target="_blank" rel='noreferrer'><img title='Heredero' src='images/sponsor/logoheredero.png' alt='sponsor'></img></a></div>
                                <div><a href='https://www.instagram.com/ots.krew/?hl=es-la' target="_blank" rel='noreferrer'><img title='OTS KREW' src='images/sponsor/OTSKREW_logo.png' alt='sponsor'></img></a></div>
                                <div><a href='https://www.instagram.com/rec.agencyar/?hl=es-la' target="_blank" rel='noreferrer'><img title='Rec Agency' src='images/sponsor/recagency.png' alt='sponsor'></img></a></div>
                                <div><a href='https://www.instagram.com/speedunlimited_/?hl=es-la' target="_blank" rel='noreferrer'><img title='Speed' src='images/sponsor/speed.png' alt='sponsor'></img></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information