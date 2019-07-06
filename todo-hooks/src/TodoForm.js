import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInput from './hooks/useInput';
import { TodosContext } from './contexts/todos.context';

function TodoForm() {
	const [ val, updateVal, resetVal ] = useInput('');
	const { addTodo } = useContext(TodosContext);
	return (
		<Paper style={{ margin: '1rem 0', padding: '0.2rem 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(val);
					resetVal();
				}}
			>
				<TextField
					value={val}
					onChange={updateVal}
					margin="normal"
					label="Add New Todo"
					variant="outlined"
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoForm;
