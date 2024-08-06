/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// * Parent component
export const Derive_LiftState = () => {
	const [Input, setIput] = useState('');

	return (
		<>
			{/* input data */}
			<InputComp inputValue={Input} setIput={setIput} />
			{/* display data */}
			<DisplayComp inputValue={Input} />
		</>
	);
};

// * passing props from --> parent
const InputComp = ({ inputValue, setIput }) => {
	return (
		<>
			<input
				type="text"
				placeholder="enter name"
				value={inputValue}
				onChange={(e) => {
					setIput(e.target.value);
				}}
			/>
		</>
	);
};

const DisplayComp = ({ inputValue }) => {
	return (
		<>
			<p>Name: {inputValue}</p>
		</>
	);
};
