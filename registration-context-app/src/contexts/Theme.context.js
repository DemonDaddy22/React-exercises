import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
	const [ isDarkMode, setIsDarkMode ] = useToggle(false);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme: setIsDarkMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
