import styled from 'styled-components';

export const Button = styled.button`
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 116%;
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    background-color: var(--color-btn);
    border-radius: 5px;
    padding: 0 22px;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    transition: .3s all ease;
    :hover{
        background: grey;
    }
`;
