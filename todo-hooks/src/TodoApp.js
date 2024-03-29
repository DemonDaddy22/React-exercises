import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './contexts/todos.context';

function TodoApp() {
	// const initialTodos =
	// 	{ id: uuid(), task: 'Clean fishtank', completed: false },
	// 	{ id: uuid(), task: 'Wash car', completed: false },
	// 	{ id: uuid(), task: 'Feed the dog', completed: false }
	// ];

	return (
		<Paper style={{ padding: 0, margin: 0, height: '100vh', background: '#efefef' }} elevation={0}>
			<AppBar color="secondary" position="static" style={{ height: '64px' }}>
				<ToolBar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</ToolBar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1.5rem' }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
