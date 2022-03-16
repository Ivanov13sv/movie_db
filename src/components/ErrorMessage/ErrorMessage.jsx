import styled from 'styled-components';

export const ErrorMessage = ({children}) => {
	return <Message>{children}</Message>;
};

const Message = styled.h1`
	color: red;
    text-align: center;
    margin: 2rem 0 0 0;
`;
