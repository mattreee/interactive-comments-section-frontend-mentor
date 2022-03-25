import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const Reply = ({
	id,
	content,
	createdAt,
	score,
	user,
	replyingTo,
	currentUser,
	deleteState,
	setDeleteState,
	openDeleteModal,
	parentId,
	parentUsername,
}: any) => {
	const [displayEdit, setDisplayEdit] = useState(false);
	const [textInput, setTextInput] = useState("");

	const openEdit = () => {
		setDisplayEdit(!displayEdit);
	};

	const updateContent = {
		content: textInput,
	};

	const handleSubmit = () => {
		fetch(`http://localhost:3333/updatereply/${parentId}/${id}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updateContent),
		});
	};

	return (
		<div className="reply">
			<div className="comments__comment-score">
				<img className="comments__comment-score-button" src={IconPlus} alt="" />
				<p className="comments__comment-score-value">{score}</p>
				<img
					className="comments__comment-score-button"
					src={IconMinus}
					alt=""
				/>
			</div>
			<div className="comments__comment-main">
				<div className="comments__comment-header">
					<img
						className="comments__comment-image"
						src={user.image.png}
						alt=""
					/>
					<h3 className="comments__comment-username">{user.username}</h3>
					{user.username === currentUser.username && (
						<p className="comments__comment-you">you</p>
					)}
					<p className="comments__comment-time-ago">{createdAt}</p>

					{user.username === currentUser.username ? (
						<div className="comments__comment-user-options">
							<button onClick={openDeleteModal} className="delete-button">
								Delete
							</button>
							<button className="edit-button" onClick={openEdit}>
								{!displayEdit ? "Edit" : "Close"}
							</button>
						</div>
					) : (
						<button className="comments__comment-reply-button">Reply</button>
					)}
				</div>

				{!displayEdit ? (
					<p>
						<span className="span-replying-to">
							{replyingTo || parentUsername}
						</span>{" "}
						{content}
					</p>
				) : (
					<form
						className="comments__comment-update-form"
						onSubmit={handleSubmit}
					>
						<textarea
							className="new__input"
							onChange={(e) => setTextInput(e.target.value)}
						></textarea>
						<button className="new__submit">UPDATE</button>
					</form>
				)}

				{deleteState && (
					<DeleteModal
						modalState={deleteState}
						setModalState={setDeleteState}
						commentId={id}
						parentId={parentId}
					/>
				)}
			</div>
		</div>
	);
};

export default Reply;
