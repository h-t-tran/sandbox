const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const movies = require('../../movies.json')
const {
  fetchMoviesActionCreator
} = require('modules/movies.js')
const styles = require('./movies.css')

class Movies extends React.Component {
  componentWillMount() {
      var moviesABC = movies; //{ prop1: 1, prop2: 2 };
    this.props.fetchMovies(moviesABC)
  }
  // Comment componentWillMount() and uncomment componentDidMount to use async fetch

  // componentDidMount() {
  //   fetch('/src/movies.json', {method: 'GET'})
  //     .then((response)=>{return response.json()})
  //     .then((movies)=>{
  //       this.props.fetchMovies(movies)
  //     })
  // }
  render() {
    const {
      children,
      moviesDEF = [],
      params = {},
        totalMoviesCost = 0,
    } = this.props

      var mystyle = {
          color: 'red',
          backgroundColor: 'white'
      };

    return (
      <div className={styles.movies}>
          <div style={mystyle}>cost{totalMoviesCost}</div>
        <div className={params.id ? styles.listHidden : styles.list}>
          {moviesDEF.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

module.exports = connect(({moviesREDUCER}) => ({
  moviesDEF: moviesREDUCER.all,
    totalMoviesCost : moviesREDUCER.totalCost
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)
