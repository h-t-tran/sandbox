const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const {
  fetchMovieActionCreator
} = require('modules/movies.js')
const styles = require('./movie.css')

class Movie extends React.Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.params.id)
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  render() {
    const {
        data1 = 0,
      movie2 = {
        starring: [],
          foo: 45
      }
    } = this.props

    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie2.cover})`}}>
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${movie2.cover})`}} />
          <span>HELP</span>
        <div className={styles.description}>
          <div className={styles.title}>{data1}{movie2.title}</div>
          <div className={styles.year}>{movie2.year}</div>
          <div className={styles.starring}>
            {movie2.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/movies">
          ←
        </Link>
      </div>
    )
  }
}

module.exports = connect(({moviesREDUCER}) => ({
  movie2: moviesREDUCER.current,
    data1: moviesREDUCER.data1InNewState
}), {
  fetchMovie: fetchMovieActionCreator
})(Movie)
