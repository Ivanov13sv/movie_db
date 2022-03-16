import styled, { keyframes } from 'styled-components';

export const Loader = () => {
	return <Spinner />;
};


const rotate = keyframes`
    100%{
        transform: rotate(360deg);
    }

`
const Spinner = styled.div`
	background-color: transparent;
    border: 1rem solid #00808067;
    border-left-color: #67a8a8;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	position: absolute;
	top: 30%;
	right: calc(50% - 100px);
    animation: ${rotate} 1500ms infinite;
`;
