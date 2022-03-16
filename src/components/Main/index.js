import styled from 'styled-components';
import { MovieItem } from '../MovieItem';
import { Container } from '../Container';


export const Main = ({movieList}) => {


	return (
		<StyledMain>
			<FlexContainer>
                {movieList.map(item => <MovieItem  key={item.id} movie={item}/> )}
			</FlexContainer>
		</StyledMain>
	);
};


const StyledMain = styled.main`
	margin: 2.5rem;

`;

const FlexContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	gap: 4.3rem 3rem;
	justify-content: center;
`;
