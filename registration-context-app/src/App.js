import React, { Component } from 'react';
import { ThemeProvider } from './contexts/Theme.context';
import Navbar from './Navbar';
import './App.css';
import Form from './Form';
import PageContent from './PageContent';

class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<PageContent>
					<Navbar />
					<Form />
				</PageContent>
        </ThemeProvider>
		);
	}
}

export default App;
