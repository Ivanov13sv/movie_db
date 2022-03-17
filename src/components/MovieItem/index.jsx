import { ReactComponent as Star } from '../../img/icons/star.svg';
import { Link } from 'react-router-dom';
import { useImageError } from '../../hooks/useImageError';
import { LoadableImage } from '../LoadableImage';
import { Movie, MovieBody, MovieInfo, MovieRating, MovieFooter } from './style';

export const MovieItem = ({ movie }) => {


	const { id, title, year, genres = [], rating, medium_cover_image } = movie;
	const [isError, img] = useImageError(medium_cover_image);

	const shortTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title;

	return (
		<Movie>
			<MovieBody>
				<LoadableImage onError={isError} src={img} alt={title} />
				<MovieInfo>
					<MovieRating>
						<Star />
						<span>{rating}</span>
					</MovieRating>
					<div>
						{genres.map((item) => (
							<h3 key={id + item}>{item}</h3>
						))}
					</div>
					<Link to={`/movies/${id}`}>More</Link>
				</MovieInfo>
			</MovieBody>

			<MovieFooter>
				<h5>{shortTitle}</h5>
				<span>{year}</span>
			</MovieFooter>
		</Movie>
	);
};
