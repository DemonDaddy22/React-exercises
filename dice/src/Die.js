import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	render() {
		let face = this.props.face;
		return (
			<div className="Die">
				<i className={`fas fa-dice-${face} ${this.props.rolling && 'shaking'}`} />
			</div>
		);
	}
}

export default Die;
