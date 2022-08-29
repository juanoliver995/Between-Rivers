import igIcon from '../images/ig-icon.png';
import shareIcon from '../images/share.png';

function SocialShare() {
    return (
        <div className="container_socialShare">
            <div className='container-btn'>
                <div className='downoad-ticket'>
                    <a href='https://api.whatsapp.com/send?phone=5493446204312&text=Hola!%20que%20debo%20hacer%20para%20descargar%20mi%20ingreso%20al%20evento?' target="_blank" rel="noreferrer"><img alt="share" src={shareIcon} />Consigue tu ingreso</a>
                </div>
            </div>
            <div className='container-btn'>
                <div className='ig-share'>
                    <a href='https://www.instagram.com/betweenrivers___/?hl=es-la' target="_blank" rel="noreferrer"><img alt="logo passline" src={igIcon} />Siguenos en Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default SocialShare;