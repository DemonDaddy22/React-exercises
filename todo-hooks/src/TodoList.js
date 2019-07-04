import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

function TodoList(props) {
	if (props.todos.length)
		return (
			<Paper>
				<List>
					{props.todos.map((todo, i) => (
						<div key={todo.id}>
							<TodoItem
								id={todo.id}
								task={todo.task}
								completed={todo.completed}
								handleEdit={props.handleEdit}
								handleToggle={() => props.handleToggle(todo.id)}
								handleRemove={() => props.handleRemove(todo.id)}
							/>
							{i < props.todos.length - 1 && <Divider />}
						</div>
					))}
				</List>
			</Paper>
		);

	return null;
}

export default TodoList;
