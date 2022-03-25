import { useState, useEffect } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = () => {
	const [currentUser, setCurrentUser] = useState({
		image: {
			png: "",
			webp: "",
		},
		username: "",
	});
	const [comments, setComments] = useState([]);

	const getAllComments = () => {
		fetch("http://localhost:3333/comments")
			.then((res) => res.json())
			.then((data) => setComments(data));
	};

	const getCurrentUser = () => {
		fetch("http://localhost:3333/currentuser")
			.then((res) => res.json())
			.then((data) => setCurrentUser(data));
	};

	// Load comments once after the page loads
	useEffect(() => {
		getAllComments();
		getCurrentUser();
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
					createdAt={elem.createdAt}
					currentUser={currentUser}
					commentId={elem.id}
					replies={elem.replies}
				/>
			))}
			<NewComment currentUser={currentUser} />
		</section>
	);
};

export default Comments;
