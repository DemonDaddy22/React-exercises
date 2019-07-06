import React, { createContext, useReducer } from 'react';
import useTodo from '../hooks/useTodo';
import uuid from 'uuid/v4';
import TodosReducer from '../reducers/todo.reducer';

const defaultTodos = [
	{ id: uuid(), task: 'Clean fishtank', completed: false },
	{ id: uuid(), task: 'Wash car', completed: false },
	{ id: uuid(), task: 'Feed the dog', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const [ todos, dispatch ] = useReducer(TodosReducer, defaultTodos);
	return <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>;
}
