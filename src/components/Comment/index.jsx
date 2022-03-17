import { DeleteIcon, CommentWrapper, User, Date, Text } from './style';

export const Comment = ({ comment, removeComment }) => {
	const { text, date, id } = comment;

	return (
		<CommentWrapper>
			<DeleteIcon onClick={() => removeComment(id)} />
			<div>
				<User>You</User>
				<Date>{date}</Date>
			</div>
			<Text>{text}</Text>
		</CommentWrapper>
	);
};
