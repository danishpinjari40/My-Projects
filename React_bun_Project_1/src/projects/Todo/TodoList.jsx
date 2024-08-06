import React from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';

const TodoList = ({ data, onDeleteTodo, onHandleChecked, checked }) => {
	return (
		<li className="todo-item">
			<span className={checked ? 'checkList' : 'notCheckList'}>{data}</span>
			<button
				className={checked ? 'un-check-btn' : 'check-btn'}
				onClick={() => onHandleChecked(data)}
			>
				{checked ? <RxCrossCircled /> : <MdCheck />}
			</button>
			<button
				className="delete-btn"
				// * call back funtion
				onClick={() => onDeleteTodo(data)}
			>
				<MdDeleteForever />
			</button>
		</li>
	);
};

export default TodoList;
