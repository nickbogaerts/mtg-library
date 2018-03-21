/**
 * Actions for cards
 */

import { fetchCards } from './cards'

export const CARD_IS_LOADING = 'CARD_IS_LOADING'
export const CARD_HAS_LOADED = 'CARD_HAS_LOADED'
export const CARD_HAS_FAILED_LOADING = 'CARD_HAS_FAILED_LOADING'
export const PRINTINGS_HAVE_LOADED = 'PRINTINGS_HAVE_LOADED'

export function cardIsLoading(cardId, loading) {
  return {
    type: CARD_IS_LOADING,
    value: { cardId, loading }
  }
}

export function cardHasLoaded(cardId, card) {
  return {
    type: CARD_HAS_LOADED,
    value: { cardId, card }
  }
}

export function cardHasFailedLoading(cardId, error) {
  return {
    type: CARD_HAS_FAILED_LOADING,
    value: { cardId, error }
  }
}

export function printingsHaveLoaded(cardId, printings) {
  return {
    type: PRINTINGS_HAVE_LOADED,
    value: { cardId, printings }
  }
}

export function fetchCard(cardId) {
  return (dispatch) => {
    dispatch(cardIsLoading(cardId, true))
    fetch('https://api.scryfall.com/cards/' + cardId)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then((card) => {
        dispatch(cardHasLoaded(cardId, card))
        return card
      })
      .then(card => fetchCards(card.prints_search_uri, (printings) => dispatch(printingsHaveLoaded(cardId, printings))))
      .then(card => dispatch(cardIsLoading(cardId, false)))
      .catch(error => dispatch(cardHasFailedLoading(cardId, error)))
    }
}
