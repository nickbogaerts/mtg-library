/**
 * Actions for saving card counts
 */

export const CHANGE_CARD_COUNT = 'CHANGE_CARD_COUNT'

export function changeCardCount(cardId, foil, count) {
  return {
    type: CHANGE_CARD_COUNT,
    value: { cardId, foil, count}
  }
}
