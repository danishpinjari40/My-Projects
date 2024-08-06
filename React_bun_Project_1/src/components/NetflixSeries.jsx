import React from 'react';

import seriesData from '../seriesData.json';
import CardData from './Card';

const NetflixSeries = () => {
	return (
		<ul>
			{seriesData.map((data) => (
				<CardData key={data.id} curElem={data} />
			))}
		</ul>
	);
};

export default NetflixSeries;
