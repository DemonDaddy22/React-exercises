import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/navbarStyles';

class Navbar extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit">
							<span role="img" aria-label="language">
								🇫🇷
							</span>
						</IconButton>
						<Typography className={classes.title} variant="h6" noWrap color="inherit">
							Registration
						</Typography>
						<Switch />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'Search' }}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);
