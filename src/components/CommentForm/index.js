import styled from 'styled-components';
import { ReactComponent as BackArrow } from '../../img/icons/backArrow.svg';
import { Button } from '../UI/Button';
import { useInput } from '../../hooks/useInput';

export const CommentForm = ({ addComment }) => {
	const { inputControl, setValue } = useInput('');

	const addNewComment = (e) => {
		addComment(e, inputControl.value);
		setValue('');
	};

	return (
		<FormWrapper
			onSubmit={(e) => addNewComment(e)}
		>
			<textarea {...inputControl} placeholder='Leave a comment' />

			<Button>
				<BackArrow />
			</Button>
		</FormWrapper>
	);
};

const FormWrapper = styled.form`
	display: flex;
	background: rgba(163, 163, 164, 0.1);
	padding: 12px;
	border-radius: var(--border-radius);
	gap: 0 0.5rem;
	align-items: center;
	textarea {
		width: 100%;
		background-color: var(--color-btn);
		outline: none;
		border: none;
		border-radius: var(--border-radius);
		padding: 0.5rem;
		height: 4.375rem;
		font-size: var(--fs-sm);
		color: var(--color-text);
		font-weight: var(--fw-superlight);
		letter-spacing: 0.1rem;
		resize: none;
		&::placeholder {
			color: var(--color-text);
		}
	}
`;
