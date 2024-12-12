const GetRatedMovies = async (guestId, setRatedError, setLoading) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${apiKey}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`)
    }
    const body = await response.json()
    setLoading(false)
    return body
  } catch {
    setRatedError(true)
    setLoading(false)
    return {}
  }
}

export default GetRatedMovies
