// * Interview Question
// *  ! --> not operator
// const students = [];
// return (
// 	<>
// 		{/* <p>{students.length && 'No Students found'}</p> */}
// 		{/* 1st fix */}
// 		{/* <p>{students.length === 0 && 'No Students found'}</p> */}
// 		{/* 2 */}
// 		<p>{!students.length && 'No Students found'}</p>
// 		<p>No. of students: {students.length}</p>
// 	</>
// );

// import NetflixSeries from './components/NetflixSeries';
// import { EventProps } from './components/EventProps';
// import State from './components/State';
// import { Derive_LiftState } from './components/Derive_LiftState';
// import { ToggleSwitch } from './projects/ToggleSwtich';
import {Todo} from './projects/Todo/Todo';


function App() {
	return (
		<>
			{/* <NetflixSeries /> */}
			{/* <Profile /> */}
			{/* <EventProps /> */}
			{/* <State /> */}
			{/* <Derive_LiftState/> */}
			{/* <ToggleSwitch/> */}
			<Todo />
		</>
	);
}

export default App;
