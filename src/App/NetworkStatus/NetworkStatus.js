const NetworStatus = (set) => {
  const checkNetworkStatus = () => {
    set(navigator.onLine)
  }
  const intervalId = setInterval(checkNetworkStatus, 1000)
  return () => {
    clearInterval(intervalId)
  }
}

export default NetworStatus
