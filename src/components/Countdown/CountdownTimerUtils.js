import dayjs from "dayjs"

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs)
  const nowDayjs = dayjs()
  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      segundos: "00",
      minutos: "00",
      horas: "00",
      dias: "00"
    }
  }
  return {
    segundos: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutos: getRemainingMinutes(nowDayjs, timestampDayjs),
    horas: getRemainingHours(nowDayjs, timestampDayjs),
    dias: getRemainingDays(nowDayjs, timestampDayjs)
  }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60
  return padWithZero(seconds, 2)
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60
  return padWithZero(minutes, 2)
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24
  return padWithZero(hours, 2)
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, "days")
  return days.toString()
}

function padWithZero(number, minLength) {
  const numberString = number.toString()
  if (numberString.length >= minLength) return numberString
  return "0".repeat(minLength - numberString.length) + numberString
}