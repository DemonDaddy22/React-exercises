import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Todo from './Todo';
import Todoform from './Todoform';
import './Todolist.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}

	updateTodo = (id, upTodo) => {
		const updatedTodos = this.state.todos.map((t) => {
			if (t.id === id) {
				return { ...t, todo: upTodo };
			}
			return t;
		});
		this.setState({
			todos: updatedTodos
		});
	};

	addTodo = (todo) => {
		const newTodo = { id: uuid(), todo: todo };
		this.setState((st) => ({
			todos: [ ...st.todos, newTodo ]
		}));
	};

	removeTodo = (id) => {
		let todos = this.state.todos.filter((t) => t.id !== id);
		this.setState({
			todos: todos
		});
	};

	render() {
		return (
			<div className="Todolist">
				<h1 className="Todolist-heading">Todo List</h1>
				<Todoform addTodo={this.addTodo} />
				<br />
				<hr />
				<br />
				{this.state.todos.map((t) => {
					return (
						<Todo
							id={t.id}
							key={t.id}
							todo={t.todo}
							updateTodo={this.updateTodo}
							removeTodo={() => this.removeTodo(t.id)}
						/>
					);
				})}
			</div>
		);
	}
}

export default Todolist;
