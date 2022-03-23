import { useState, useEffect } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = () => {
	const [comments, setComments] = useState([]);

	const getAllComments = () => {
		fetch("http://localhost:3333/comments")
			.then((res) => res.json())
			.then((data) => setComments(data));
	};

	// Load comments once after the page loads
	useEffect(() => {
		getAllComments();
	}, []);

	return (
		<section className="comments">
			{comments.map((elem: any) => (
				<Comment
					key={String(Math.random())}
					score={elem.score}
					profileImage={elem.user.image.png}
					username={elem.user.username}
					content={elem.content}
				/>
			))}
			<NewComment />
		</section>
	);
};

export default Comments;
