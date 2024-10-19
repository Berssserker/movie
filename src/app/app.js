import React, { Component } from 'react'

import 'normalize.css'
import './app.css'

import MovieList from './movie-list/movie-list'

export default class App extends Component {
  state = {
    movies: []
  }
  
  url = `https://api.themoviedb.org/3/search/movie?api_key=dbabe22dcc1a65ea74c83602a2fa9d71&query=${encodeURIComponent('return')}`

  getMovie = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error ('sosi cock!')
    }
    const body = await res.json()
    return body
  }

  async componentDidMount() {
    try {
      const movieData = await this.getMovie(this.url) 
      this.setState({ movies: movieData.results })} catch (error) {
      console.error(error);
    }
  }
  
  render() {
    console.log(this.state.movies)
    return <MovieList movies={this.state.movies}/>
  }
}
