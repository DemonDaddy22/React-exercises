import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';
import {TodosContext} from './contexts/todos.context';

function TodoList() {
	const { todos } = useContext(TodosContext);
	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<div key={todo.id}>
							<TodoItem id={todo.id} task={todo.task} completed={todo.completed} />
							{i < todos.length - 1 && <Divider />}
						</div>
					))}
				</List>
			</Paper>
		);
	}
	return null;
}

export default TodoList;
