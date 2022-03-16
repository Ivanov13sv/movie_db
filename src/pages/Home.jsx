import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { getPagesArr } from '../utils/getPagesArr';
import { Loader } from '../components/UI/Loader';
import { getMovies } from '../API/getMovies';
import { useFetching } from '../hooks/useFetching';

export const Home = () => {
	const [activePage, setActivePage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [fetching, isLoading, errorMessage] = useFetching(async () => {
		const data = await getMovies(
			'https://yts.mx/api/v2/list_movies.json',
			activePage,
			20
		);
		setMovies(data.movies);
		setTotalCount(data.movie_count);
	});

	useEffect(() => {
		fetching();
		// eslint-disable-next-line
	}, [activePage]);


	let pagesArray = getPagesArr(totalCount, 20);

	return (
		<>
			<Header
				pages={pagesArray}
				activePage={activePage}
				changePage={setActivePage}
			/>
			{isLoading ? <Loader /> : <Main movieList={movies} />}

			{errorMessage ? <div>{errorMessage}</div> : null}
		</>
	);
};
