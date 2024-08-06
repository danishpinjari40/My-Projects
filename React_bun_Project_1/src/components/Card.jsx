import React from 'react';

const CardData = ({ data }) => {
	// * De-Structuring
	const { imgURL, title, rating } = data;

	return (
		<li>
			<div>
				<img src={imgURL} alt={title} />
			</div>
			<h2>Name: {title} </h2>
			<h3>Rating: {rating} </h3>
		</li>
	);
};

export default CardData;
