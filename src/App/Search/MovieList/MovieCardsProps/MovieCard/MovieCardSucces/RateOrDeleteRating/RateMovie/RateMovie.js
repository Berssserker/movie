const RateMovie = async (guestId, movieId, rating = 0) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestId}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: rating,
    }),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(`${error.status}, ${error.statusText}`)
  }
}

export default RateMovie
