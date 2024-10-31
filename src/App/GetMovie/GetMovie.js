const GetMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=dbabe22dcc1a65ea74c83602a2fa9d71&query=${encodeURIComponent(query)}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`)
    }
    const body = await response.json()
    return body
  } catch (error) {
    console.log(error)
  }
}

export default GetMovie
