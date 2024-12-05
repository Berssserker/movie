const DeleteRateMovie = async (guestId, movieId) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestId}`
  const response = await fetch(url, {
    method: 'DELETE',
  })
  if (!response.ok) {
    const error = await response.json()
    console.log(error)
  }
}

export default DeleteRateMovie
