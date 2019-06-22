import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false,
			todo: this.props.todo,
			isEditing: false
		};
	}

	handleClick = () => {
		this.setState((st) => ({
			done: !st.done
		}));
	};

	handleUpdate = (e) => {
		e.preventDefault();
		this.props.updateTodo(this.props.id, this.state.todo);
		this.setState({
			isEditing: false
		});
	};

	handleChange = (e) => {
		this.setState({
			todo: e.target.value
		});
	};

	renderForm = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	render() {
		let task = this.state.done ? 'Todo-task' : '';
		let res;
		if (this.state.isEditing) {
			res = (
				<div>
					<form onSubmit={this.handleUpdate}>
						<input
							className="Todoedit-input"
							name="todo"
							type="text"
							value={this.state.todo}
							onChange={this.handleChange}
						/>
						<button className="Todoedit-btn">Update Todo</button>
					</form>
				</div>
			);
		} else {
			res = (
				<div className="Todo">
					<p className="Todo-text">
						<span className={task} onClick={this.handleClick}>
							{this.props.todo}
						</span>
						<span>
							<button className="Todo-btn Todo-edit" onClick={this.renderForm}>
								<i className="far fa-edit" />
							</button>
							<button className="Todo-btn" onClick={this.props.removeTodo}>
								<i className="far fa-trash-alt" />
							</button>
						</span>
					</p>
				</div>
			);
		}
		return res;
	}
}

export default Todo;
