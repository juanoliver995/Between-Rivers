import React from "react";
import { NavbarWrapper } from "../styles/NavBarStyles";
import { Link } from "react-router-dom";
function Navbar({ open }) {
    return (
        <NavbarWrapper className="container container--2" open={open}>
            <Link to="/" className="text">Inicio</Link>
            <Link to="/information" className="text">Informacion</Link>
            <Link to="/loguin" className="text">Login</Link>
        </NavbarWrapper>

    );
}

export default Navbar;