/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState({});
	// * input field
	const handleInputChange = (value) => {
		// * for adding id
		setInputValue({ id: value, content: value, checked: false });
	};

	//* form submit
	const handleFormSubmit = (e) => {
		e.preventDefault();
		// * use function using props
		onAddTodo(inputValue);
		// * clear field
		setInputValue({ id: "", content: "", checked: false });
	};

	return (
		<section className="form">
			<form onSubmit={handleFormSubmit}>
				<div>
					<input
						type="text"
						className="todo-input"
						autoComplete="off"
						value={inputValue.content}
						onChange={(event) => handleInputChange(event.target.value)}
					/>
				</div>
				<div>
					<button type="submit" className="todo-btn">
						Add Task
					</button>
				</div>
			</form>
		</section>
	);
};

export default TodoForm;
