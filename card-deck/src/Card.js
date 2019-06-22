import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	constructor(props) {
		super(props);
		// this will ensure earlier cards don't get transformed as constructor is called only once
		let angle = Math.random() * 90 - 45;
		let x = Math.random() * 40 - 20;
		let y = Math.random() * 40 - 20;
		this._style = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
	}
	render() {
		return <img style={{ transform: this._style }} src={this.props.image} alt={this.props.alt} className="cards" />;
	}
}

export default Card;
