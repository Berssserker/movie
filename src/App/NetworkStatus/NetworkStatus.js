import { useEffect } from 'react'

const NetworStatus = (set) => {
  useEffect(() => {
    const checkNetworkStatus = () => {
      set(navigator.onLine)
    }
    const intervalId = setInterval(checkNetworkStatus, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
}

export default NetworStatus
