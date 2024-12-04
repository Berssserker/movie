const GetGenres = async () => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  const response = await fetch(url)
  const body = await response.json()
  console.log(body.genres)
  return body
}

export default GetGenres
