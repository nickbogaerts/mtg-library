import { applyMiddleware, compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const enhancer = compose(
  persistState('savedCards'),
  applyMiddleware(thunk)
)

const store = createStore(rootReducer, {}, enhancer)
export default store
