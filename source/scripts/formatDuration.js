function writeDuration(minutes) {
  const minInDay = 1440
  const minInHour = 60
  let days = Math.floor(minutes / minInDay)
  minutes = minutes % minInDay
  let hours = Math.floor(minutes / minInHour)
  minutes = minutes % minInHour

  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes'
}

export default writeDuration
