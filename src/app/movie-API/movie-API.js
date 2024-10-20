export default class MovieApi {
  url = `https://api.themoviedb.org/3/search/movie?api_key=dbabe22dcc1a65ea74c83602a2fa9d71&query=${encodeURIComponent('return')}`

  async getMovie() {
    const res = await fetch(this.url)
    if (!res.ok) {
      throw new Error(`sosi cock! ${res.status}`)
    }
    const body = await res.json()
    return body
  }
}
