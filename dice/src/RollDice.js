import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice1: 'one',
			dice2: 'six',
			rolling: false
		};
	}
	static defaultProps = {
		face: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	roll = () => {
		let num1 = Math.floor(Math.random() * 6);
		let num2 = Math.floor(Math.random() * 6);
		this.setState({
			dice1: this.props.face[num1],
			dice2: this.props.face[num2],
			rolling: true
		});

		// after 750 msec button goes back to roll dies
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 750);
	};

	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-Dies">
					<Die face={this.state.dice1} rolling={this.state.rolling} />
					<Die face={this.state.dice2} rolling={this.state.rolling} />
				</div>
				<div className="RollDice-button">
					<button onClick={this.roll} className="RollDice-btn" disabled={this.state.rolling}>
						{this.state.rolling ? 'Rolling...' : 'Roll Dies'}
					</button>
				</div>
			</div>
		);
	}
}

export default RollDice;
