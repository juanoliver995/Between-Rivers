import React from "react"
import { NavbarWrapper } from "../styles/NavBarStyles"

function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper className="container container--2" open={open}>
      <a onClick={handleClick} to="/" className="text">Inicio</a>
      <a onClick={handleClick} to="/information" className="text">Informacion</a>
      <a onClick={handleClick} to="/entradas" className="text">Entradas</a>
    </NavbarWrapper>
  )
}

export default Navbar