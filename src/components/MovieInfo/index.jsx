import { Container } from '../Container';
import { Button } from '../UI/Button';
import { ReactComponent as BackArrow } from '../../img/icons/backArrow.svg';
import { ReactComponent as Star } from '../../img/icons/star.svg';
import { Comment } from '../Comment';
import { CommentForm } from '../CommentForm';
import { useImageError } from '../../hooks/useImageError';
import * as S from './style';

export const MovieInfo = ({
	movieItem,
	goBack,
	comments,
	addComment,
	removeComment,
}) => {
	const {
		large_cover_image,
		title,
		rating,
		year,
		genres = [],
		description_full,
	} = movieItem;

	const [isError, img] = useImageError(large_cover_image);

	return (
		<>
			<S.InfoHeader>
				<Container>
					<S.HeaderBody>
						<span>{title}</span>
						<Button onClick={() => goBack(-1)}>
							<BackArrow />
						</Button>
					</S.HeaderBody>
				</Container>
			</S.InfoHeader>

			<S.FlexContainer>
				<S.MoviePoster>
					<img onError={isError} src={img} alt={title} />
					<div>
						<Star />
						<span>{rating}</span>
					</div>
				</S.MoviePoster>

				<S.InfoBlock>
					<h2>{title}</h2>
					<S.Year>{year}</S.Year>
					<S.Genres>
						{genres.map((item, i) => (
							<li key={`${i}-${item}`}>{item.toLowerCase()}</li>
						))}
					</S.Genres>
					<S.Description>
						<h3>Synopsis</h3>
						<p>{description_full}</p>
					</S.Description>
					<S.Comments>
						<h3>Comments</h3>
						<ul>
							{comments.map((item, i) => (
								<Comment
									key={i}
									comment={item}
									removeComment={removeComment}
								/>
							))}
						</ul>
						<CommentForm
							addComment={addComment}
							removeComment={removeComment}
						/>
					</S.Comments>
				</S.InfoBlock>
			</S.FlexContainer>
		</>
	);
};
