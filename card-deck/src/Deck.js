import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			cards: []
		};
		this.handleClick = this.handleClick.bind(this);
	}
	async componentDidMount() {
		const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
		let response = await axios.get(url);
		let data = response.data;
		const deck_id = data.deck_id;
		this.setState({
			id: deck_id
		});
	}
	async handleClick() {
		try {
			const id = this.state.id;
			let url = `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`;
			let response = await axios.get(url);
			let data = response.data;
			if (!data.success) {
				throw new Error('No cards remaining!');
			}
			console.log(data);
			const img = data.cards[0].images.png;
			const code = data.cards[0].code;
			this.setState({
				cards: [ ...this.state.cards, { img: img, code: code } ]
			});
		} catch (e) {
			alert(e);
		}
	}
	render() {
		return (
			<div>
				<h1>Card Dealer</h1>
				<h2>
					<span role="img">♠ ️</span> Patte-Pe-Patta <span role="img"> ♠ </span>
				</h2>
				<button onClick={this.handleClick} className="btn">
					Gimme a card
				</button>
				<div className="deck">
					{this.state.cards.map((c) => {
						// transform: translate(10px,20px) rotate(10deg)
						return <Card image={c.img} key={c.code} alt={c.code} />;
					})}
				</div>
			</div>
		);
	}
}

export default Deck;
