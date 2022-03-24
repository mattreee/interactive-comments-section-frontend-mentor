import { useState } from "react";

const NewComment = ({ currentUser }: any) => {
	const [textInput, setTextInput] = useState("");

	const handleSubmit = (event: any) => {
		// event.preventDefault();

		const content = {
			content: textInput,
		};

		fetch("http://localhost:3333/new", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(content),
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<img src={currentUser.image.png} alt="" />
			<input
				type="text"
				name="content"
				placeholder="Add a comment..."
				required
				value={textInput}
				onChange={(e) => setTextInput(e.target.value)}
			/>
			<input type="submit" value="SEND" />
		</form>
	);
};

export default NewComment;
