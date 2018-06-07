const React = require('react')
const { connect } = require('react-redux')
const styles = require('./app.css')

class App extends React.Component {
  render() {
    const {
      children
    } = this.props

      const { testme } = this.props;

    return (
        <div>
            <div className={styles.app}>
                {children}
            </div>
        </div>
    )
  }
}

module.exports = connect()(App)
