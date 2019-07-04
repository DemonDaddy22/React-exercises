import { useState } from 'react';

function useToggle(initialVal) {
	const [ state, setState ] = useState(initialVal);
	const handleToggle = () => {
		setState(!state);
	};
	return [ state, handleToggle ];
}

export default useToggle;
