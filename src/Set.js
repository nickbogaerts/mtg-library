import React, { Component } from 'react';

class Sets extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loaded: false
		}
		fetch((props.uri || 'https://api.scryfall.com/cards/search?order=set&q=s:') + (props.code || 'LEA'))
			.then(response => response.json())
			.then(response => {
				this.setState({
					loaded: true,
					cards: response.data
				})
			})
	}

	render() {
		// show a loading message while loading data
		if (!this.state.loaded) {
			return (<span>Loading...</span>)
		}

		let cards = this.state.cards.map((card) => {
			return (
				<div className="panel panel-default" key={card.id}>
					<div className="panel-heading">
						<img src={card.image_uris.normal} />
					</div>
				</div>
			)
		})

		// render the set
		return (
			<div>
				{cards}
			</div>
		)
	}   
}

export default Sets
