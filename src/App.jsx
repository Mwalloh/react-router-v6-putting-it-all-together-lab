import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import DirectorContainer from "./pages/DirectorContainer.jsx";
import DirectorList from "./pages/DirectorList.jsx";
import DirectorForm from "./pages/DirectorForm.jsx";
import DirectorCard from "./pages/DirectorCard.jsx";
import MovieCard from "./pages/MovieCard.jsx";
import MovieForm from "./pages/MovieForm.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/directors" element={<DirectorContainer />}>
					<Route index element={<DirectorList />} />
					<Route path="new" element={<DirectorForm />} />
					<Route path=":directorId" element={<DirectorCard />}>
						<Route path="movies/:movieId" element={<MovieCard />} />
						<Route path="movies/new" element={<MovieForm />} />
					</Route>
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
