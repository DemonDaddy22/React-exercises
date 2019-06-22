import React, { Component } from 'react';
import Flip from './Flip';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Let's flip a coin!</h1>
				<Flip />
			</div>
		);
	}
}

export default App;
