import styled from 'styled-components';
import { Container } from '../Container';


export const InfoHeader = styled.div`
	background-color: var(--color-header);
	margin: 0 0 3.5625rem 0;
	padding: 0 1rem;
	@media(max-width: 999px){
		margin: 0 0 1rem 0;
	}
`;
export const HeaderBody = styled.div`
	height: 62px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 650px) {
		justify-content: center;

		span {
			display: none;
		}
	}
	span {
		color: var(--color-text);
		font-size: var(--fs-md);
		font-weight: var(--fw-light);
	}
`;

export const MoviePoster = styled.div`
	width: 466px;
	height: 698px;
	position: relative;
	pointer-events: none;
	padding: 0 1rem;
	@media (max-width: 1200px) {
		width: 350px;
		height: 500px;
	}

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
		right: 2rem;
		display: flex;
		align-items: center;
		@media (max-width: 1200px) {
			right: 1.3rem;
		}
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


export const InfoBlock = styled.section`
	max-width: 653px;
	padding: 0 1rem;

	h2 {
		color: var(--color-text);
		font-weight: var(--fw-normal);
		font-size: var(--fs-title);
		@media (max-width: 1200px) {
			font-size: var(--fs-md);
		}
	}

	h3 {
		font-weight: var(--fw-bold);
		color: var(--color-text);
		font-size: var(--fs-md);
		letter-spacing: 0.02rem;
		margin: 0 0 1rem 0;
	}

	ul {
	}
`;

export const Year = styled.span`
	font-weight: var(--fw-superlight);
	color: var(--color-text);
	font-size: var(--fs-bg);
	line-height: 115%;
`;

export const Description = styled.div`
	@media(max-width: 1200px){
		max-width: 600px;
	}
	@media(max-width: 1000px){
		max-width: 400px;
	}

	p {
		color: var(--color-text);
		font-weight: var(--fw-superlight);
		font-size: var(--fs-sm);
		margin: 0 0 1.375rem 0;
	}
`;

export const Genres = styled.ul`
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

export const Comments = styled.div`

	li:not(:last-child) {
		margin: 0 0 1rem 0;
	}
	ul {
		margin: 0 0 1.375rem 0;
		max-height: 200px;
		overflow-y: auto;
	}
	@media(max-width: 999px){
		max-width: 400px;
	}
	margin-bottom: 1rem;
`;

export const FlexContainer = styled(Container)`
	display: flex;
	gap: 0 3.8125rem;
	@media(max-width: 999px){
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem 0;
	}
`;
