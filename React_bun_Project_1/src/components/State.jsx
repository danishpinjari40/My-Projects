import React, { useState } from 'react';

// const users = [
// 	{
// 		name: 'Alice',
// 		age: 25,
// 	},
// 	{
// 		name: 'Bob',
// 		age: 20,
// 	},
// 	{
// 		name: 'Charlie',
// 		age: 30,
// 	},
// 	{
// 		name: 'Angles',
// 		age: 45,
// 	},
// ];

const State = () => {
	// * useState
	const [users, setUser] = useState([
		{
			name: 'Alice',
			age: 25,
		},
		{
			name: 'Bob',
			age: 20,
		},
		{
			name: 'Charlie',
			age: 30,
		},
		{
			name: 'Angles',
			age: 45,
		},
	]);

	return (
		<>
			<div>
				<h1>User list</h1>
				<ul>
					{users.map((e, index) => {
						return (
							<>
								<li key={index}>
									{e.name} - {e.age} years old
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default State;
