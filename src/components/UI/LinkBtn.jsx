import styled from 'styled-components';

export const LinkBtn = styled.li`
	height: 2.5rem;
	line-height: 116%;
	font-size: var(--fs-md);
	font-weight: ${(props) => (props.active ? '500' : '300')};
	background-color: var(--color-btn);
	border-radius: 10px;
	color: ${(props) => (props.active ? 'whitesmoke' : '#299ded')};
	padding: 0 20px;
	border: none;
	border: 2px solid transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		border: 2px solid #299ded;
	}

	@media (max-width: 650px){
		height: 1.5rem;
		padding: 0 .8rem;
		font-size: var(--fs-sm);
	}
`;
