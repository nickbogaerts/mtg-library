/**
 * Actions for selection / deselection of cards
 */

export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_DESELECTED = 'CARD_DESELECTED'

export function selectCard(card) {
  return {
    type: CARD_SELECTED,
    value: card
  }
}

export function deselectCard() {
  return {
    type: CARD_DESELECTED,
    value: { }
  }
}
