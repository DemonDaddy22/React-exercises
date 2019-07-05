import React, { Component } from 'react';
import { ThemeContext } from './contexts/Theme.context';

class PageContent extends Component {
	static contextType = ThemeContext;
	render() {
		const { isDarkMode } = this.context;
		const styles = {
			backgroundColor: isDarkMode ? '#1e1e1e' : '#efefef',
			height: '100vh',
			width: '100vw'
		};
		return <div style={styles}>{this.props.children}</div>;
	}
}

export default PageContent;
