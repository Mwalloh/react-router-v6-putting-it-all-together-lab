import { Outlet, useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const DirectorContainer = () => {
	const [directors, setDirectors] = useState([]);
	const { directorId } = useParams();
	const { movieId } = useParams();

	const director = directors.find((d) => d.id === directorId);

	useEffect(() => {
		fetch("http://localhost:4000/directors")
			.then((r) => {
				if (!r.ok) {
					throw new Error("failed to fetch directors");
				}
				return r.json();
			})
			.then(setDirectors)
			.catch(console.log);
	}, []);

	return (
		<>
			<NavBar />
			<main>
				<h1>Welcome to the Director's Directory!</h1>
				{window.location.pathname === "/directors/new" ? (
					""
				) : (
					<Link to="/directors/new">Add a new director</Link>
				)}
				<Outlet context={{ directors, setDirectors, director, movieId }} />
			</main>
		</>
	);
};

export default DirectorContainer;
