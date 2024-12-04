import { useState, useEffect } from 'react'

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  useEffect(() => {
    const checkNetworkStatus = () => {
      setIsOnline(navigator.onLine)
    }
    const intervalId = setInterval(checkNetworkStatus, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [isOnline])
  return isOnline
}

export default useNetworkStatus
