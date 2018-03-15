import React, { Component } from 'react'
import List from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ListItemWithRouter from './ListItemWithRouter'

class Sets extends Component {

  componentDidMount() {
    this.props.fetchSets()
  }
  
  render() {
    // show a loading message while loading data
    if (this.props.loading) {
      return (<span>Loading...</span>)
    }

    // iterate over all the sets loaded from our API
    let sets = this.props.sets.map(set => this.getListItem(set)) 

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
        secondaryText={ `${set.released_at || ''} (${set.card_count} cards, ${ set.subsets ? set.subsets.length : 'no'} subsets)` }
        set={set} />
    )
  }
}

export default Sets
