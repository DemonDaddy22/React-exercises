import uuid from 'uuid/v4';
import useLocalStorage from './useLocalStorage';

function useTodo(initialTodos) {
	const [ todos, setTodos ] = useLocalStorage('todos', initialTodos);

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
