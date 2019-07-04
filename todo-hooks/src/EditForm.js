import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInput from './hooks/useInput';

function EditForm({ task, handleEdit, id, toggle }) {
	const [ val, handleChange, resetVal ] = useInput(task);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleEdit(id, val);
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
