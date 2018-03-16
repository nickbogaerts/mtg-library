/**
 * Actions for cards
 */

export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_HAS_LOADED = 'SET_HAS_LOADED'
export const SET_HAS_FAILED_LOADING = 'SETHAS_FAILED_LOADING'

export function setIsLoading(code, loading) {
  return {
    type: SET_IS_LOADING,
    value: { code, loading }
  }
}

export function setHasLoaded(code, cards) {
  return {
    type: SET_HAS_LOADED,
    value: { code, cards }
  }
}


export function setHasFailedLoading(code, error) {
  return {
    type: SET_HAS_FAILED_LOADING,
    value: { code, error }
  }
}

export function fetchSet(code) {
  return (dispatch) => {
    dispatch(setIsLoading(code, true))
    fetch('https://api.scryfall.com/cards/search?order=set&q=s:' + code)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setIsLoading(code, false));
        dispatch(setHasFailedLoading(code, false))
        return response.json()
      })
      .then(response => response.data)
      .then((set) => dispatch(setHasLoaded(code, set)))
      .catch(error => dispatch(setHasFailedLoading(code, error)))
    }
}
