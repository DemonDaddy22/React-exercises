import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		return (
			<div className="Pokedex">
				<h3 className={this.props.isWinner ? 'Pokedex-Winner' : 'Pokedex-Loser'}>
					{this.props.isWinner ? 'Winner Hand' : 'Loser Hand'}
				</h3>
				<h5 className="Pokedex-header">Total Experience: {this.props.exp}</h5>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((o) => (
						<Pokecard id={o.id} name={o.name} type={o.type} base_experience={o.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
