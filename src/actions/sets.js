/**
 * Actions for sets
 */

export const SETS_ARE_LOADING = 'SETS_ARE_LOADING'
export const SETS_HAVE_LOADED = 'SETS_HAVE_LOADED'
export const SETS_HAVE_FAILED_LOADING = 'SETS_HAVE_FAILED_LOADING'

export function setsAreLoading(loading) {
  return {
    type: SETS_ARE_LOADING,
    value: loading
  }
}

export function setsHaveLoaded(sets) {
  return {
    type: SETS_HAVE_LOADED,
    value: sets
  }
}


export function setsHaveFailedLoading(error) {
  return {
    type: SETS_HAVE_FAILED_LOADING,
    value: error
  }
}

export function fetchSets() {
  return (dispatch) => {
    dispatch(setsAreLoading( true))
    fetch('https://api.scryfall.com/sets')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(setsAreLoading(false));
        dispatch(setsHaveFailedLoading(false))
        return response.json()
      })
      .then(response => {
        let sets = [],
          subsets = {}
          
        response.data.forEach( set => {
          subsets[set.code] = subsets[set.code] || []
          set.subsets = subsets[set.code]
          
          if (set.parent_set_code) {
            subsets[set.parent_set_code] = subsets[set.parent_set_code] || []
            subsets[set.parent_set_code].push(set)
          } else {
            sets.push(set)
          }
        })
        return sets
      })
      .then((sets) => dispatch(setsHaveLoaded(sets)))
      .catch(error => dispatch(setsHaveFailedLoading(error)))
    }
}
