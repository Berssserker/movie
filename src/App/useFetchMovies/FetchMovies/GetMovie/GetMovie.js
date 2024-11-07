const GetMovie = async (query, page) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`
  const guest = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
  try {
    const response = await fetch(url)
    const guestResponse = await fetch(guest)
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`)
    }
    if (!guestResponse.ok) {
      throw new Error(`${guestResponse.status}, ${guestResponse.statusText}`)
    }
    const body = await response.json()
    const guestSession = guestResponse.json()
    console.log(guestSession)
    console.log(body)
    return body
  } catch (error) {
    console.log(error)
  }
}

export default GetMovie
