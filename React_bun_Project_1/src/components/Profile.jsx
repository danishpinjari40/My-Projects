import React, { Children } from 'react';

const Profile = () => {
	// * Data passing with props

	return (
		<ProfileCard
			name="dany"
			age={25}
			greeting={
				<div>
					<strong>Hello world</strong>
				</div>
			}
		>
			<p>hobbies</p>
		</ProfileCard>
	);
};

export default Profile;

const ProfileCard = ({ name, age, greeting,children }) => {
	return (
		<>
			<h2>Name: {name}</h2>
			<p>Age: {age}</p>
			<p>{greeting}</p>
			<div>{children}</div>
		</>
	);
};

//   export default ProfileCard;
