import ContainerPoints from "./ContainerPoints"
function Entradas (){
    return (
        <div className="container-entradas">
            <h2>Informacion sobre venta de entradas</h2>
            <div className="entradas-info">
                <h3>Entradas Virtuales</h3>
                <p>Puedes adquirir tu entrada virtual a traves de passline en este <a href="https://www.passline.com/eventos/between-rivers-birthday-edit" target="_blank" rel="noreferrer">link</a></p>
            </div>
            <div className="container-entradas-img">
                <div className="entradas-flyer">
                    <img src="/public/images/tiketes.png" alt="flyer entradas"></img>
                </div>
                <div className="entradas-flyer">
                        <img src="/public/images/mesas.png" alt="flyer entradas"></img>
                </div>
            </div>
            <div className="entradas-info">
                <h3>Entradas Fisicas y Mesas</h3>
                <p>Puedes adquirir tus entradas fisicas comunciandote con nosotros a traves de 
                    <a href="https://www.instagram.com/betweenrivers___/?hl=es-la"> Instagram </a>
                    o con nuestros puntos de venta
                </p>
            </div>
            <ContainerPoints/>
        </div>
    )
}

export default Entradas