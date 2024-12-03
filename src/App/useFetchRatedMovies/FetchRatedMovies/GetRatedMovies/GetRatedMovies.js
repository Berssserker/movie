const GetRatedMovies = async (guestId) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${apiKey}`
  const response = await fetch(url)
  const body = await response.json()
  return body
}

export default GetRatedMovies
