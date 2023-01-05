import "./App.css"
import Home from "./components/Home"
import Flyer from "./components/Flyer-desk"
import Slider from "./components/Slider"
import Entradas from "./components/Entradas"
import Flyermobile from "./components/Flyer-mobile"
import PuntosDesk from "./components/PuntosDesk"
import PuntosMobile from "./components/PuntosMobile"
function App() {

  return (
    <>
      <Home/>
      {
        window.screen.width > 1100 ? <Flyer /> : <Flyermobile/>
      }
      <Slider/>
      <Entradas/>
      {
        window.screen.width > 1100 ? <PuntosDesk /> : <PuntosMobile />
      }
    </>
  )
}

export default App
