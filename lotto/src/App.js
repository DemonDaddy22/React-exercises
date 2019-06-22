import React, { Component } from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Lottery />
				<Lottery title="Daily" maxNum={10} count={4} />
			</div>
		);
	}
}

export default App;
