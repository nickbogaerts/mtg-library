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
    fetchCards('https://api.scryfall.com/cards/search?order=set&q=s:' + code, (cards) => dispatch(setHasLoaded(code, cards)))
      .then(() => dispatch(setIsLoading(code, false)))
      .catch(error => dispatch(setHasFailedLoading(code, error)))
    }
}

export function fetchCards(url, callback) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      };
      return response.json()
    })
    .then(response => {
      callback(response.data)
      if (response.has_more) {
        return fetchCards(response.next_page, callback)
      }
    })
}
