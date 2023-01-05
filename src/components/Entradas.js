import React from "react"

const Entradas = () => {
  return (
    <section className="entradas">
      <div className="container-entradas">
        <div className="entrada">
          <div className="precio">
            <h4>Erly Bird</h4>
            <h6>$2500</h6>
          </div>
          <p>Disponibles hasta agotar stock</p>
        </div>
        <div className="entrada">
          <div className="precio">
            <h4>Tanda Unica</h4>
            <h6>$3000</h6>
          </div>
          <p>Disponibles hasta <span>13/01</span></p>
        </div>
        <div className="entrada">
          <div className="precio">
            <h4>En puerta</h4>
            <h6>$3500</h6>
          </div>
          <p>Disponibles <span>14/01</span> durante el evento</p>
        </div>
      </div>
    </section>
  )
}

export default Entradas