import { useState, useEffect } from "react"
import { getRemainingTimeUntilMsTimestamp } from "./CountdownTimerUtils.js"

const defaultRemainingTime = {
  segundos: "00",
  minutos: "00",
  horas: "00",
  dias: "00"
}


const CountdownTimer = ({ countdownTimestampMs }) => {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className="next-date">
      <h2>Extended Edition</h2>
      <div className="countdown-container">
        <div className="container-item-count">
          <span className="count-number">{remainingTime.dias}</span>
          <span className="text-count">dias</span>
        </div>
        <div className="container-item-count">
          <span className="count-number">{remainingTime.horas}</span>
          <span className="text-count">hs</span>
        </div>
        <div className="container-item-count">
          <span className="count-number">{remainingTime.minutos}</span>
          <span className="text-count">min</span>
        </div>
        <div className="container-item-count">
          <span className="count-number">{remainingTime.segundos}</span>
          <span className="text-count">seg</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer