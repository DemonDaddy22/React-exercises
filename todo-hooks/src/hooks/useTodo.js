import { useState } from 'react';
import uuid from 'uuid/v4';

function useTodo(initialTodos) {
	const [ todos, setTodos ] = useState(initialTodos);

	return {
		todos,
		addTodo: (newTodo) => {
			setTodos([ ...todos, { id: uuid(), task: newTodo, completed: false } ]);
		},
		removeTodo: (id) => {
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		},
		toggleTodo: (id) => {
			const updatedTodos = todos.map((todo) => {
				return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
			});
			setTodos(updatedTodos);
		},
		editTodo: (id, task) => {
			const updatedTodos = todos.map((todo) => {
				return todo.id === id ? { ...todo, task: task } : todo;
			});
			setTodos(updatedTodos);
		}
	};
}

export default useTodo;
