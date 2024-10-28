const GetMovie = async (query = 'war') => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=dbabe22dcc1a65ea74c83602a2fa9d71&query=${encodeURIComponent(query)}`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`${res.status}, ${res.statusText}`)
    }
    const body = await res.json()
    return body
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default GetMovie
