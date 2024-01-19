import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [{ id: "u1", name: "Max Schwarz", image: "https://picsum.photos/200", places: 3 }];
	return (
		<div>
			<UsersList items={USERS} />
		</div>
	);
};

export default Users;
