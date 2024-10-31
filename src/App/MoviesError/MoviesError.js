const MoviesError = (data, setError, text) => {
  if (data !== null && data.length === 0 && text !== '') {
    setError(true)
  } else {
    setError(false)
  }
}

// export default MoviesError

// import { useEffect, useState } from 'react'

// const useMoviesError = (data, text) => {
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     if (data !== null && data.length === 0 && text !== '') {
//       setError(true)
//     } else {
//       setError(false) // Сброс ошибки, если данные не пустые
//     }
//   }, [data, text])

//   return error
// }

export default MoviesError
