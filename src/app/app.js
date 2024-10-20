import React, { Component } from 'react'

import 'normalize.css'
import './app.css'

import MovieList from './movie-list/movie-list'
import MovieApi from './movie-API/movie-API'

export default class App extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const api = new MovieApi()
    const movieData = await api.getMovie()
    this.setState({ movies: movieData.results })
  }

  render() {
    return <MovieList movies={this.state.movies} />
  }
}
