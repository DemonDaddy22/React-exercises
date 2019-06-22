import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			face: 'heads',
			head: 0,
			tail: 0,
			count: 0
		};
	}

	flip = () => {
		let coin = [ 'heads', 'tails' ];
		let ind = Math.floor(Math.random() * coin.length);
		let toss = coin[ind];
		this.setState(
			(curState) =>
				toss === 'heads'
					? { head: curState.head + 1, face: toss, count: curState.count + 1 }
					: { tail: curState.tail + 1, face: toss, count: curState.count + 1 }
		);
	};

	render() {
		return (
			<div>
				<Coin face={this.state.face} />
				<br />
				<br />
				<p>
					Out of {this.state.count} flips, there have been {this.state.head} heads and {this.state.tail} tails
				</p>
				<br />
				<button onClick={this.flip}>Flip Coin</button>
			</div>
		);
	}
}

export default Flip;
