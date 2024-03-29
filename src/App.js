import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<Users />
					</Route>
					<Route path="/:userId/places" exact>
						<UserPlaces />
					</Route>
					<Route path="/places/new" exact>
						<NewPlace />
					</Route>
					<Route path="/users" exact>
						<Users />
					</Route>

					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
