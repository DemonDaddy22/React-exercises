import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInput from './hooks/useInput';
import { TodosContext } from './contexts/todos.context';

function EditForm({ task, id, toggle }) {
	const [ val, handleChange, resetVal ] = useInput(task);
	const { dispatch } = useContext(TodosContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'EDIT', id: id, task: val });
		resetVal();
		toggle();
	};

	return (
		<div style={{ marginLeft: '1rem', height: '64px' }}>
			<form onSubmit={handleSubmit} style={{ padding: '0.9rem' }}>
				<TextField value={val} onChange={handleChange} margin="none" fullWidth autoFocus />
			</form>
		</div>
	);
}

export default EditForm;
