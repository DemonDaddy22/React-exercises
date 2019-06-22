import React, { Component } from 'react';

class Coin extends Component {
	render() {
		return (
			<div>
				<img
					src={
						this.props.face === 'heads' ? (
							'https://tinyurl.com/react-coin-heads-jpg'
						) : (
							'http://pngimg.com/uploads/coin/coin_PNG3561.png'
						)
					}
					alt={this.props.face}
					height="200"
					width="200"
				/>
			</div>
		);
	}
}

export default Coin;
