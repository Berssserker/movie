const GetRatedMovies = async (guestId) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${apiKey}`
  const response = await fetch(url)
  if (!response.ok) {
    const error = await response.json()
    console.error('Ошибка при получении списка оцененных фильмов:', error)
  }
  const body = await response.json()
  return body
}

export default GetRatedMovies
