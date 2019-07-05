import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles/navbarStyles';
import { ThemeContext } from './contexts/Theme.context';
import { LanguageContext } from './contexts/Language.context';

const content = {
	english: {
		search: 'Search',
		emoji: 'BR',
		register: 'Registration'
	},
	french: {
		search: 'Chercher',
		emoji: 'FR',
		register: 'Enregistrement'
	},
	spanish: {
		search: 'Buscar',
		emoji: 'SP',
		register: 'Registro'
	}
};

function Navbar(props) {
	// console.log(this.context);
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<strong>{content[language].emoji}</strong>
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap color="inherit">
						{content[language].register}
					</Typography>
					<div style={{ marginRight: '2rem' }}>
						<Switch onChange={toggleTheme} />
					</div>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${content[language].search}...`}
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

export default withStyles(styles)(Navbar);
