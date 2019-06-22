import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component {
	render() {
		const num = this.props.num;
		return (
			<div>
				<div className="Ball">
					<h4 className="Content">{num}</h4>
				</div>
			</div>
		);
	}
}

export default LottoBall;
