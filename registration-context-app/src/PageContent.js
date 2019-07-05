import React, { Component } from 'react';

const styles = {
	backgroundColor: '#fff',
	height: '100vh',
	width: '100vw'
};

class PageContent extends Component {
	render() {
		return <div style={styles}>{this.props.children}</div>;
	}
}

export default PageContent;
