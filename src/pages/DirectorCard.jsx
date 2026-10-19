import { useOutletContext, Link, Outlet } from "react-router";

function DirectorCard() {
	// Replace me
	const { directors, setDirectors, director, movieId } = useOutletContext();

	if (!director) {
		return <h2>Director not found.</h2>;
	}

	return (
		<div>
			<h2>{director.name}</h2>
			<p>{director.bio}</p>
			<h3>Movies:</h3>
			<ul>
				{director.movies.map((movie) => (
					<li key={movie.id}>
						<Link to={`movies/${movie.id}`}>{movie.title}</Link>
					</li>
				))}
			</ul>
			<Link to={`movies/new`}>Add New Movie</Link>
			{/* Movie components should render here depending on route */}
			<Outlet context={{ movieId, director, directors, setDirectors }} />
		</div>
	);
}

export default DirectorCard;
