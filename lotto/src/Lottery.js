import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		maxNum: 40,
		count: 6
	};

	constructor(props) {
		super(props);
		this.state = {
			nums: Array.from({ length: this.props.count })
		};
	}

	// addNum = () => {
	// 	let nums = [];
	// 	for (let i = 0; i < this.props.count; i++) {
	// 		let randNum = Math.ceil(Math.random() * this.props.maxNum);
	// 		nums.push(randNum);
	// 	}
	// 	this.setState({ nums: nums });
	// };

	addNum = () => {
		this.setState((curState) => ({
			nums: curState.nums.map((n) => Math.ceil(Math.random() * this.props.maxNum))
		}));
	};

	render() {
		return (
			<div className="Lottery">
				<h2>{this.props.title}</h2>
				<div className="Lottery-balls">{this.state.nums.map((num) => <LottoBall num={num} />)}</div>
				<br />
				<br />
				<button onClick={this.addNum}>Generate</button>
			</div>
		);
	}
}

export default Lottery;
