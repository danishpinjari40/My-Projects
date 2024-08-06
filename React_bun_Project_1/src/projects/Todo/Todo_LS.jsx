// * setting local storage --> usestate

const todoLocalKey = 'react-Todo';

export const get_LS_Data_SetData = () => {
	const rawData = localStorage.getItem(todoLocalKey);
	if (!rawData) return [];
	//* method 2 --> try catch use
	// try {
	// 	return JSON.parse(rawData);
	// } catch (error) {
	// 	console.error('Error parsing local storage data:', error);
	// 	return [];
	// }
	// * method --> 1
	return JSON.parse(rawData);
};

export const set_LS_Data_SetData = (task) => {
	// * Local Storage adding data --> method --> 1
	return localStorage.setItem(todoLocalKey, JSON.stringify(task));
};
