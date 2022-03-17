import styled from 'styled-components';
import { ReactComponent as Delete } from '../../img/icons/delete.svg';


export const DeleteIcon = styled(Delete)`
	position: absolute;
	width: 1rem;
	height: 1rem;
	right: 0.6rem;
	display: none;
	transform: scale(.8);
	transition: .2s ease;
	cursor: pointer;
	&:hover{
		transform: scale(1);

	}
`;


export const CommentWrapper = styled.li`
	border-radius: var(--border-radius);
	padding: 0.4375rem 0.625rem;
	background-color: var(--color-btn);
	width: 100%;
	color: var(--color-text);
	display: flex;
	flex-direction: column;
	justify-content: start;
	position: relative;

	&:hover{
		${DeleteIcon}{
			display: block;
		}
	}
`;

export const User = styled.span`
	font-size: 1rem;
	font-weight: var(--fw-light);
	margin: 0 1.25rem 0 0;
`;
export const Date = styled.span`
	font-size: 1rem;
	font-weight: var(--fw-superlight);
`;

export const Text = styled.span`
	margin: 0.6rem 0 0 0;
	font-size: var(--fs-sm);
	font-weight: var(--fw-normal);
`;


