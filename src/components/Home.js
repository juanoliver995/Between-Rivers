import logobt from "../images/logo-br-grande.png"
import CountdownTimer from "./Countdown/CountdownTimer"
function Home() {
  return (
    <section className="container-home">
      <div className="home">
        <img src={logobt} />
      </div>
      <CountdownTimer countdownTimestampMs={1673740799000} />
    </section>
  )
}

export default Home