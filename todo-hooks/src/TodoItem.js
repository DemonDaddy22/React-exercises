import React, { useContext } from 'react';
import useToggle from './hooks/useToggle';
import EditForm from './EditForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { TodosContext } from './contexts/todos.context';

function TodoItem(props) {
	let [ isEditing, toggleIsEditing ] = useToggle(false);
	const { toggleTodo, removeTodo } = useContext(TodosContext);
	return (
		<div>
			{isEditing ? (
				<EditForm id={props.id} task={props.task} toggle={toggleIsEditing} />
			) : (
				<ListItem style={{ height: '64px' }}>
					<CheckBox checked={props.completed} tabIndex={-1} onClick={() => toggleTodo(props.id)} />
					<ListItemText style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
						{props.task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Edit" onClick={toggleIsEditing}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label="Delete" onClick={() => removeTodo(props.id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			)}
		</div>
	);
}

export default TodoItem;
