import { useState } from "react";

const ReplyBox = ({ currentUser, parentId }: any) => {
	const [textInput, setTextInput] = useState("");

	const handleSubmit = () => {
		const content = {
			content: textInput,
		};

		fetch(`https://mattreee-comment-api.herokuapp.com/newreply/${parentId}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(content),
		});
	};

	return (
		<form className="reply-box" onSubmit={handleSubmit}>
			<img className="new__img" src={currentUser.image.png} alt="" />
			<textarea
				className="new__input"
				name="content"
				placeholder="Add a comment..."
				required
				value={textInput}
				onChange={(e) => setTextInput(e.target.value)}
			/>
			<input className="new__submit" type="submit" value="REPLY" />
		</form>
	);
};

export default ReplyBox;
