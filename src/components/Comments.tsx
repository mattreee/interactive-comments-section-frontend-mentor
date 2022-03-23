import { useState, useEffect } from "react";

// interface commentsInterface {
// 	comments: {
// 		id: number;
// 		content: string;
// 		createdAt: string;
// 		score: number;
// 		user: {};
// 		replies: [];
// 	}[];
// }

const Comments = () => {
	const [comments, setComments] = useState([]);

	// Load comments once after the page loads
	useEffect(() => {
		fetch("https://mattreee-comment-api.herokuapp.com/comments", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);

	return (
		<section>
			{comments.map((elem: any) => (
				<div key={String(Math.random())}>
					<p>{elem.user.username}</p>
					<p>{elem.content}</p>
				</div>
			))}
		</section>
	);
};

export default Comments;
