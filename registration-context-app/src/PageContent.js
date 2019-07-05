import React, { useContext } from 'react';
import { ThemeContext } from './contexts/Theme.context';

function PageContent(props) {
	const { isDarkMode } = useContext(ThemeContext);
	const styles = {
		backgroundColor: isDarkMode ? '#1e1e1e' : '#efefef',
		height: '100vh',
		width: '100vw'
	};
	return <div style={styles}>{props.children}</div>;
}

export default PageContent;
