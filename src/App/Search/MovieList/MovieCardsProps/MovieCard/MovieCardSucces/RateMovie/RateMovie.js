// async function RateMovie(guestId, movieId, rating) {
//   const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
//   const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${guestId}`
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       value: rating,
//     }),
//   })
//   if (!response.ok) {
//     const error = await response.json()
//     throw new Error(`${error.status}, ${error.statusText}`)
//   }
//   console.log('Фильм успешно оценен!')
// }

async function RateMovie(guestId, movieId, rating) {
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

  console.log('Фильм успешно оценен!')
}

const GetRated = async (guestId) => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/guest_session/${guestId}/rated/movies?api_key=${apiKey}`
  const response = await fetch(url)
  if (!response.ok) {
    const error = await response.json()
    console.error('Ошибка при получении списка оцененных фильмов:', error)
    return
  }

  const body = await response.json()
  console.log(body)
  return body
}

// Пример использования
async function RateAndFetchMovies(guestId, movieId, rating) {
  try {
    await RateMovie(guestId, movieId, rating) // Оцениваем фильм
    const ratedMovies = await GetRated(guestId) // Получаем оцененные фильмы
    console.log('Оцененные фильмы:', ratedMovies)
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

export default RateAndFetchMovies
