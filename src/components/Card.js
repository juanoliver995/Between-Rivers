import 'atropos/css';
import Atropos from 'atropos/react';
import HeaderCard from './HeaderCard';
function Card() {
    return (
        <Atropos duration={500} highlight={true} shadow={false} className="elAtropos">
            <div className='container'>
                <div className='container-card'>
                    <div className='card'>
                        <HeaderCard />
                        <div className='main-card'>
                            <h1 data-atropos-offset="10" data-atropos-opacity="0.9;1">Birthday Gero</h1>
                            <div data-atropos-offset="-2">
                                <p data-atropos-offset="5">OCTUBRE 01 • GUALEGUAYCHU • 01AM</p>
                            </div>
                        </div>
                        <div className='footer-card' data-atropos-offset="8">
                            <h3>Invitado Especial</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Atropos>
    )
}

export default Card;