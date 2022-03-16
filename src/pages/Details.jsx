import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { MovieInfo } from '../components/MovieInfo';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/Loader';
import { getMovies } from '../API/getMovies';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Details = () => {
	let { id } = useParams();
	const navigate = useNavigate();

	const [movieItem, setMovieItem] = useState('');
	const [comments, setComments] = useLocalStorage('comments', []);

	const commentsForFilm = comments.filter(item => item.movieId === id);


	const [fetching, isLoading, errorMessage] = useFetching(async () => {
		const data = await getMovies(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
		);
		setMovieItem(data.movie);
	});

	const removeComment = id =>{
		setComments(comments.filter(item => item.id !== id));
	}

	const addComment = ( e, text) =>{
		e.preventDefault();
		setComments([...comments, {id: Date.now(), movieId: id, text, date: String(new Date())}])
	}

	useEffect(() => {
		fetching();
	}, []);

	const content = errorMessage ? (
		<ErrorMessage>{errorMessage}</ErrorMessage>
	) : (
		<MovieInfo
			movieItem={movieItem}
			goBack={navigate}
			comments={commentsForFilm}
			addComment={addComment}
			removeComment={removeComment}
		/>
	);

	return <>{isLoading ? <Loader /> : content}</>;
};
