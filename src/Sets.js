import React, { Component } from 'react';

class Sets extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loaded: false
		}
		
		fetch(props.uri || 'https://api.scryfall.com/sets')
			.then(response => response.json())
			.then(response => {
				this.setState({
					loaded: true,
					sets: response.data
				})
			})
	}

	render() {
		// show a loading message while loading data
		if (!this.state.loaded) {
			return (<span>Loading...</span>)
		}

		// iterate over all the sets loaded from our API
		let sets = this.state.sets.map((set) => {
			return (
				<div className="panel panel-default" key={set.code}>
					<div className="panel-heading">
						<h3 className="panel-title"><a href={'/sets/' + set.code}>{set.name}</a></h3>
						<p>{set.released_at} </p>
						<p>{set.card_count} cards</p>
					</div>
				</div>
			)
		})

		// render the sets
		return (
			<div>
				{sets}
			</div>
		)
	}   
}

export default Sets
