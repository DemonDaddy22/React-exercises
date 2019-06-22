import React, { Component } from 'react';
import './Todoform.css';

class Todoform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			todo: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="Todoform">
				<input
					className="Todoform-input"
					name="todo"
					type="text"
					placeholder="Type a todo..."
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button className="Todoform-btn">Add Todo</button>
			</form>
		);
	}
}

export default Todoform;
