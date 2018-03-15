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

/**
 * Wrapper around localStorage for serialisation / deserialisation of values
 */
/*
const storeProxy = {
  
    get (target, name) {
      let item = target.getItem(name)
      if (item !== undefined) {
        try {
          return JSON.parse(item)
        } catch (e) {
          return item
        }
      } else {
        return target.name
      }
    },
    
    set(target, name, value) {
      target.setItem(name, JSON.stringify(value))
      return true
    }
}

export default new Proxy(localStorage, storeProxy)
*/
