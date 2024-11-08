import { useState, useEffect } from 'react'

import GetId from './GetId/GetId'

const useFetchId = () => {
  const [id, setId] = useState()
  const [errorId, setErrorId] = useState(false)
  useEffect(() => {
    const fetchId = async () => {
      try {
        const body = await GetId()
        setId(body.guest_session_id)
        if (!body.guest_session_id) {
          setErrorId(true)
        } else {
          setErrorId(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchId()
  }, [])
  return { id, errorId }
}
export default useFetchId
