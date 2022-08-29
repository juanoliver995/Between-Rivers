import React from "react";
import { NavbarWrapper } from "../styles/NavBarStyles";
import { Link } from "react-router-dom";
function Navbar({ open, handleClick }) {
    return (
        <NavbarWrapper className="container container--2" open={open}>
            <Link onClick={handleClick} to="/" className="text">Inicio</Link>
            <Link onClick={handleClick} to="/information" className="text">Informacion</Link>
            <Link onClick={handleClick} to="/entradas" className="text">Entradas</Link>
        </NavbarWrapper>
    );
}

export default Navbar;