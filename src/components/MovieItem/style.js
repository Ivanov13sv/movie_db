import styled from 'styled-components'


export const Movie = styled.li`
	list-style: none;
	img {
	}
`;

export const MovieInfo = styled.div`
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
	position: absolute;
	backdrop-filter: blur(6.4px);
	background: rgba(48, 53, 57, 0.5);
	box-shadow: inset 20.7px -20.7px 20.7px rgba(36, 40, 43, 0.1),
		inset -20.7px 20.7px 20.7px rgba(255, 255, 255, 0.1);
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 0;
	transition: 0.6s all ease;
	overflow: hidden;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px 0;
	}

	h3 {
		font-size: var(--fs-bg);
		font-weight: var(--fw-light);
		color: var(--color-text);
		line-height: 71%;
	}
	a {
		text-decoration: none;
		font-size: var(--fs-md);
		font-weight: var(--fw-normal);
		color: #303539;
		padding: 5px 30px;
		background: red;
		line-height: 116%;
		background: #299ded;
		border-radius: var(--border-radius);
		transition: 0.3s background-color ease;
		:hover {
			background-color: #52b7fd;
		}
		:active {
			background-color: #9bd6ff;
		}
	}
`;

export const MovieBody = styled.div`
	position: relative;
	border: 5px solid #ffffff;
	border-radius: var(--border-radius);
	width: 263.27px;
	height: 377.39px;
	transition: border 0.5s ease;

	img {
		width: 100%;
		height: 100%;
	}
	&:hover {
		border: 5px solid #2e95dc;
		${MovieInfo} {
			height: 100%;
		}
	}
`;

export const MovieFooter = styled.div`
	color: var(--color-text);
	font-weight: var(--fw-light);
	h5 {
		margin: 5px 0 0 0;
		font-weight: var(--fw-light);
		line-height: 116%;
		font-size: 1rem;
	}
	span {
		font-weight: var(--fw-light);
		font-size: 0.9rem;
		color: #9ca1a4;
	}
`;

export const MovieRating = styled.div`
	padding: 5px 0 0 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 11px 0;
	span {
		font-size: var(--fs-md);
		color: var(--color-text);
	}
`;
