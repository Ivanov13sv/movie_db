import styled from 'styled-components';
import { Container } from '../Container';

export const StyledHeader = styled.header`
background: var(--color-header);
padding: 1rem;
h1 {
    color: var(--color-text);
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    @media (max-width: 650px){
    margin: 0 0 1rem 0;
}
}

`;

export const ButtonGroup = styled.ul`
list-style: none;
display: flex;
gap: 0 11px;
align-items: center;
justify-content: center;
@media (max-width: 650px){
    gap: 0 5px;
}
`;

export const FlexContainer = styled(Container)`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 650px){
    flex-direction: column;
}
`;
