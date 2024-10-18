import React, { Component } from 'react'

import 'normalize.css'
import './app.css'

import MovieList from './movie-list/movie-list'

export default class App extends Component {
  render() {
    return <MovieList />
  }
}
