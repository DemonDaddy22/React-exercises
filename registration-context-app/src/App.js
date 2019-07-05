import React, { Component } from 'react';
import { ThemeProvider } from './contexts/Theme.context';
import { LanguageProvider } from './contexts/Language.context';
import Navbar from './Navbar';
import './App.css';
import Form from './Form';
import PageContent from './PageContent';

class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<LanguageProvider>
					<PageContent>
						<Navbar />
						<Form />
					</PageContent>
				</LanguageProvider>
			</ThemeProvider>
		);
	}
}

export default App;
