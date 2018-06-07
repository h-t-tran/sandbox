const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

module.exports = {
  fetchMoviesActionCreator: (moviesFOO) => ({
    type: FETCH_MOVIES,
    moviesFOO
  }),
  fetchMovieActionCreator: (index) => ({
    type: FETCH_MOVIE,
    index
  }),
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => ({
      ...state,
      all: action.moviesFOO,
        totalCost : 1234
    }),
    [FETCH_MOVIE]: (state, action) => ({
      ...state,
      current: state.all[action.index - 1],
        data1InNewState : "[new state data]"
    })
  }, {
    movies: [],
    movie: {}
  })
}
