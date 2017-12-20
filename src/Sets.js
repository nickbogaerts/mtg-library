import React, { Component } from 'react'
import List from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ListItemWithRouter from './ListItemWithRouter'
class Sets extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false
    }
    
    fetch(props.uri || 'https://api.scryfall.com/sets')
      .then(response => response.json())
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
        
        this.setState({
          loaded: true,
          sets: sets
        })
      })
  }
  render() {
    // show a loading message while loading data
    if (!this.state.loaded) {
      return (<span>Loading...</span>)
    }

    // iterate over all the sets loaded from our API
    let sets = this.state.sets.map(set => this.getListItem(set)) 

    // render the sets
    return (
      <List>
        {sets}
      </List>
    )
  }
  
  itemClickHandler(item) {
    this.history.push(`/sets/${this.set.code}`)
    //window.location.href = `/sets/${this.set.code}`
  }

  getListItem(set) {
    return (
      <ListItemWithRouter
        key={set.code}
        leftAvatar={<Avatar src={set.icon_svg_uri}  />}
        nestedItems={ set.subsets ? set.subsets.map(set => this.getListItem(set)) : [] }
        primaryText={set.name}
        onClick={this.itemClickHandler}
        secondaryText={ `${set.released_at || ''} (${set.card_count} cards, ${set.subsets.length} subsets)` }
        set={set} />
    )
  }
}

export default Sets
