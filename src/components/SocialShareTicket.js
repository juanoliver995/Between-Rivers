import logoPasline from '../images/passline.png';
import igIcon from '../images/ig-icon.png';

function SocialShareTicket() {
    return (
        <div className="container_socialShare">
            <div className="container-btn">
                <div className='pass-line btn-gradient'>
                    <a href="https://www.passline.com/eventos/between-rivers-birthday-edit" target="_blank" rel="noreferrer"><img alt="logo passline" src={logoPasline} /> Compra tu ingreso</a>
                </div>
            </div>
            <div className='container-btn'>
                <div className='ig-share'>
                    <a href='https://www.instagram.com/betweenrivers___/?hl=es-la' target="_blank" rel="noreferrer"><img alt="logo passline" src={igIcon} /> Siguenos en Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default SocialShareTicket;