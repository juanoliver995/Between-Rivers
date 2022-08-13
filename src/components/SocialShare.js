import logoPasline from '../images/passline.png';
import igIcon from '../images/ig-icon.png';
import shareIcon from '../images/share.png';

function SocialShare() {
    return (
        <div className="container_socialShare">
            <div className="container-btn">
                <div className='pass-line btn-gradient'>
                    <button><img alt="logo passline" src={logoPasline} /> Descarga tu ingreso</button>
                </div>
            </div>
            <div className='container-btn'>
                <div className='downoad-ticket'>
                    <button><img alt="share" src={shareIcon} /> Comparti tu ticket</button>
                </div>
            </div>
            <div className='container-btn'>
                <div className='ig-share'>
                    <button><img alt="logo passline" src={igIcon} /> Siguenos en Instagram</button>
                </div>
            </div>
        </div>
    )
}

export default SocialShare;