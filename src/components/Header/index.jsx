import { StyledHeader, FlexContainer,ButtonGroup  } from './style';
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

