import styled from 'styled-components';
import { Container } from '../Container';
import { Button } from '../UI/Button';
import { ReactComponent as BackArrow } from '../../img/icons/backArrow.svg';
import { ReactComponent as Star } from '../../img/icons/star.svg';
import { Comment } from '../Comment';
import { CommentForm } from '../CommentForm';
import { useImageError } from '../../hooks/useImageError';


export const MovieInfo = ({ movieItem, goBack, comments , addComment, removeComment }) => {

	const {
		large_cover_image,
		title,
		rating,
		year,
		genres = [],
		description_full,
	} = movieItem;

	const [isError, img] = useImageError(large_cover_image)

	return (
		<InfoWrapper>
			<InfoHeader>
				<Container>
					<HeaderBody>
						<span>{title}</span>
						<Button onClick={() => goBack(-1)}>
							<BackArrow />
						</Button>
					</HeaderBody>
				</Container>
			</InfoHeader>
			<InfoBody>
				<FlexContainer>
					<MoviePoster>
						<img onError={isError} src={img} alt={title} />
						<div>
							<Star />
							<span>{rating}</span>
						</div>
					</MoviePoster>

					<InfoBlock>
						<h2>{title}</h2>
						<Year>{year}</Year>
						<Genres>
							{genres.map((item, i) => (
								<li key={`${i}-${item}`}>
									{item.toLowerCase()}
								</li>
							))}
						</Genres>
						<Description>
							<h3>Synopsis</h3>
							<p>{description_full}</p>
						</Description>
						<Comments>
							<h3>Comments</h3>
							<ul>
								{comments.map((item, i) => (
									<Comment key={i} comment={item} removeComment={removeComment}/>
								))}
							</ul>
							<CommentForm addComment={addComment} removeComment={removeComment}/>
						</Comments>
					</InfoBlock>
				</FlexContainer>
			</InfoBody>
		</InfoWrapper>
	);
};

const InfoWrapper = styled.div``;

const InfoHeader = styled.div`
	background-color: var(--color-header);
	margin: 0 0 3.5625rem 0;

	span {
		color: var(--color-text);
		font-size: var(--fs-md);
		font-weight: var(--fw-light);
	}
`;
const HeaderBody = styled.div`
	height: 62px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MoviePoster = styled.div`
	width: 466px;
	height: 698px;
	position: relative;
	pointer-events: none;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
		box-shadow: 0px 0px 25px -2px rgba(255, 255, 255, 0.2);
	}
	div {
		position: absolute;
		background-color: var(--color-bg);
		border-radius: 5px;
		padding: 0 8px;
		top: 0.6rem;
		right: 0.5rem;
		display: flex;
		align-items: center;
		& > *:not(:last-child) {
			margin: 0 0.5rem 0 0;
		}
		svg {
			width: 1.25rem;
		}
		span {
			color: var(--color-text);
			font-weight: var(--fw-superlight);
			font-size: var(--fs-md);
		}
	}
`;

const InfoBody = styled.div``;

const InfoBlock = styled.section`
	max-width: 653px;

	h2 {
		color: var(--color-text);
		font-weight: var(--fw-normal);
		font-size: var(--fs-title);
	}

	h3 {
		font-weight: var(--fw-bold);
		color: var(--color-text);
		font-size: var(--fs-md);
		letter-spacing: 0.02rem;
		margin: 0 0 1rem 0;
	}

	p {
		color: var(--color-text);
		font-weight: var(--fw-superlight);
		font-size: var(--fs-sm);
		margin: 0 0 1.375rem 0;
	}
	ul {
	}
`;

const Year = styled.span`
	font-weight: var(--fw-superlight);
	color: var(--color-text);
	font-size: var(--fs-bg);
	line-height: 115%;
`;

const Description = styled.div``;

const Genres = styled.ul`
	list-style: none;
	display: flex;
	gap: 0 1rem;
	margin: 1rem 0;
	li {
		position: relative;
		padding: 0 0 0 1.3rem;
		display: flex;
		align-items: center;
		font-size: var(--fs-sm);
		color: var(--color-text);
		font-weight: var(--fw-light);
		&:before {
			content: '';
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
			background-color: var(--color-btn);
			position: absolute;
			left: 0;
		}
	}
`;

const Comments = styled.div`
	li:not(:last-child) {
		margin: 0 0 1rem 0;
	}
    ul{
        margin: 0 0 1.375rem 0;
		max-height: 200px;
		overflow-y: auto;
    }
`;

const FlexContainer = styled(Container)`
	display: flex;
	gap: 0 3.8125rem;
`;
