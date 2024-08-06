import React, { useEffect, useState } from 'react';

const TodoDate = () => {
	// * setting date & time
	const [dateTime, setDateTime] = useState('');
	//  * Date & Time
	// * clean up function to project memory leak
	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const formateDate = now.toLocaleDateString();
			const formateTime = now.toLocaleTimeString();
			setDateTime(`${formateDate} - ${formateTime}`);
		}, 1000);

		// * clear interval for memory clear
		return () => clearInterval(interval);
	}, []);

	return <h2 className="date-time">{dateTime}</h2>;
};

export default TodoDate;
