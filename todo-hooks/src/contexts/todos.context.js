import React, { createContext } from 'react';
import useTodo from '../hooks/useTodo';
import uuid from 'uuid/v4';

const defaultTodos = [
	{ id: uuid(), task: 'Clean fishtank', completed: false },
	{ id: uuid(), task: 'Wash car', completed: false },
	{ id: uuid(), task: 'Feed the dog', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const TodoUtils = useTodo(defaultTodos);
	return <TodosContext.Provider value={TodoUtils}>{props.children}</TodosContext.Provider>;
}
