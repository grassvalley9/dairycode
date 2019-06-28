let now = new Date() // current date
    let hour
    if (now.getMinutes > 29) {
      hour = now.getHours() + 0.5
    } else {
      hour = now.getHours()
    }
    // call this function again in 5s
    dispatch(getTime(hour))
    setInterval(() => {
      console.log(hour)
      dispatch(getTime(hour))
    }, 5000)
  }
}

export const getTime = time => {
  return {
    type: ActionTypes.UPDATE_TIME,
    time
  }