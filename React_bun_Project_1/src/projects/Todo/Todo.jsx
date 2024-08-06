import { useState, useEffect } from 'react';
import './todo.css';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { set_LS_Data_SetData, get_LS_Data_SetData } from './Todo_LS';

export const Todo = () => {
	// * getting task usestate
	const [task, setTask] = useState(() => {
		return get_LS_Data_SetData();
	});

	// * handle form submit
	const handleFormSubmit = (inputValue) => {
		const { id, content, checked } = inputValue;

		// * value empty --> return
		if (!content) return;
		// * check double value
		// if (task.includes(content)) return;
		const TodoMatch = task.find((curTask) => curTask.content === content);
		if (TodoMatch) return;
		// * add previous value also add new task
		setTask((prevTask) => [...prevTask, { id, content, checked }]);
	};

	// * Delete todo
	const handleDelete = (value) => {
		// * if element --> remaining value delete --> obj
		const updatedTask = task.filter((curTask) => curTask.content !== value);
		setTask(updatedTask);
	};
	// * clear all
	const handleClearTodoData = () => {
		setTask([]);
	};
	// * check  un - check
	const handleChecked = (checked) => {
		const updatedTask = task.map((curTask) => {
			if (curTask.content === checked) {
				return { ...curTask, checked: !curTask.checked };
			} else {
				return curTask;
			}
		});
		setTask(updatedTask);
	};

	// * set local storage data
	useEffect(() => {
		set_LS_Data_SetData(task);
	}, [task]);

	return (
		<section className="todo-container">
			<header>
				<h1>Todo List</h1>
				<TodoDate />
			</header>
			{/*  form */}
			<TodoForm onAddTodo={handleFormSubmit} />

			<section className="myUnOrdList">
				<ul>
					{/* object */}
					{task.map((curTask) => {
						return (
							<TodoList
								key={curTask.id}
								data={curTask.content}
								checked={curTask.checked}
								onDeleteTodo={handleDelete}
								onHandleChecked={handleChecked}
							/>
						);
					})}
				</ul>
			</section>
			<section>
				<button className="clear-btn" onClick={handleClearTodoData}>
					Clear all
				</button>
			</section>
		</section>
	);
};
