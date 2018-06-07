const { combineReducers } = require('redux')
const {
  reducer: moviesREDUCER
} = require('./movies')

module.exports = combineReducers({
    moviesREDUCER
})
