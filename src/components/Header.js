import { useState } from "react"
import { HeaderWrapper } from "../styles/Header"
import Navbar from "../components/NavBar"
import MenuButton from "./MenuButton"
import logoBR from "../images/logo-br-grande.png"

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper>
      <a><img src={logoBR} alt="logo"></img></a>
      <Navbar open={open} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  )
}

export default Header