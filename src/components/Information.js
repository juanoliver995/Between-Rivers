import { Link } from 'react-router-dom'


function Information() {
    const andresId = 1
    const geroId = 2
    const facuId = 3
    const pekeId = 4
    const gabiId = 5
    return (
        <div className="container-informacion">
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
                        <Link to={`/artists/${andresId}`}><img src="images/andres-flyer.png" alt="andres koller"></img></Link>
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
                                    <Link to={`/artists/${geroId}`}>Geronimo Gonzalez</Link>
                                    <span>&</span>
                                    <Link to={`/artists/${facuId}`}>Facundo Asin</Link>
                                </div>
                            </div>
                            <div className='opening'>
                                <h3>Opening</h3>
                                <div className='container-opening'>
                                    <Link to={`/artists/${pekeId}`}> Luciano Vidal</Link>
                                    <span>&</span>
                                    <Link to={`/artists/${gabiId}`}> Gabriel Rojas</Link>
                                </div>
                            </div>
                        </div>
                        <div className='footer-flyer'>
                            <div className='container-date'>
                                <a className='fecha' target="_blank" rel='noreferrer' href='https://calendar.google.com/event?action=TEMPLATE&tmeid=N3FmcDFwYzQ4NzdjdXZsdjh1bnFsYmhkdTMgcGtydXZic29zdGlzZ3RrZnBzYjBkMWlvdWdAZw&tmsrc=pkruvbsostisgtkfpsb0d1ioug%40group.calendar.google.com'><h3>01 de Octubre</h3></a>
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
        </div>
    )
}

export default Information;