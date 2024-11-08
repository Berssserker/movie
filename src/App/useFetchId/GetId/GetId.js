const GetId = async () => {
  const apiKey = 'dbabe22dcc1a65ea74c83602a2fa9d71'
  const url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`
  try {
    const responce = await fetch(url)
    if (!responce.ok) {
      throw new Error(`${responce.status}, ${responce.statusText}`)
    }
    // eslint-disable-next-line no-unused-vars
    const body = await responce.json()
    return body
  } catch (error) {
    console.log(error)
  }
}

export default GetId
