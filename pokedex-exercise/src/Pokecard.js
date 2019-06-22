/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import './Pokecard.css';
// const pokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokeAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
	render() {
		let { id, name, type, base_experience } = this.props;
		let imgSrc = `${pokeAPI}${padToThree(id)}.png`;
		return (
			<div className="Pokecard">
				<h3 className="Pokecard-name">{name}</h3>
				<div className="Pokecard-img">
					<img src={imgSrc} alt={name} />
				</div>
				<p>Type: {type}</p>
				<p>EXP: {base_experience}</p>
			</div>
		);
	}
}

export default Pokecard;
