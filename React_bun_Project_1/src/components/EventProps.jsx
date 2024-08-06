/* eslint-disable react/prop-types */
import React from 'react';

export const EventProps = () => {
	const handleWelcomeUser = (user) => {
		alert(`hey,${user}`);
	};
	const handleHover = () => {
		alert(`hovering me`);
	};

	return (
		<>
			<WelcomeUser
				onClick={() => handleWelcomeUser('dany')}
				onMouseEnter={handleHover}
			/>
		</>
	);
};

const WelcomeUser = (props) => {
	const handleGreeting = () => {
		console.log('inside wellcome');
        // * function invoke
		props.onClick();
	};
	return (
		<>
			<button onClick={props.onClick}>click</button>
			<button onMouseEnter={props.onMouseEnter}>hover</button>
			<button onClick={handleGreeting}>greeting</button>
		</>
	);
};
