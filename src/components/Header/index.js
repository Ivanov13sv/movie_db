import styled from 'styled-components';
import { Container } from '../Container';
import { LinkBtn } from '../UI/LinkBtn';
import { pagination } from '../../utils/pagination';

export const Header = ({ pages, activePage, changePage }) => {
	const pagesArr = pages.map((item, i) => (
		<LinkBtn
			key={i}
			active={activePage === i + 1}
			onClick={() => changePage(i + 1)}
		>
			{item}
		</LinkBtn>
	));

	const buttons = pagination(pagesArr, activePage);

	return (
		<StyledHeader>
			<FlexContainer>
				<h1>Movies</h1>
				<ButtonGroup>{buttons}</ButtonGroup>
			</FlexContainer>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background: var(--color-header);
	padding: 15px 0;
	h1 {
		color: var(--color-text);
		font-size: var(--fs-md);
		font-weight: var(--fw-normal);
	}
`;

const ButtonGroup = styled.ul`
	list-style: none;
	display: flex;
	gap: 0 11px;
	align-items: center;
	justify-content: center;
`;

const FlexContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
