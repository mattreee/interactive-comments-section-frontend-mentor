import { useState } from "react";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import DeleteModal from "./DeleteModal";
import Reply from "./Reply";
import ReplyBox from "./ReplyBox";

const Comment = ({
	score,
	profileImage,
	username,
	content,
	createdAt,
	currentUser,
	commentId,
	replies,
}: any) => {
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [replyOpen, setReplyOpen] = useState(false);

	const openDeleteModal = () => {
		setDeleteOpen(!deleteOpen);
	};

	const openReplyBox = () => {
		setReplyOpen(!replyOpen);
	};

	return (
		<div className="comments__container">
			<div className="comments__comment">
				<div className="comments__comment-score">
					<img
						className="comments__comment-score-button"
						src={IconPlus}
						alt=""
					/>
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
							src={profileImage}
							alt=""
						/>
						<h2 className="comments__comment-username">{username}</h2>

						{username === currentUser.username && (
							<p className="comments__comment-you">you</p>
						)}

						<p className="comments__comment-time-ago">{createdAt}</p>

						{deleteOpen && (
							<DeleteModal
								modalState={deleteOpen}
								setModalState={setDeleteOpen}
								commentId={commentId}
							/>
						)}

						{username === currentUser.username ? (
							<div className="comments__comment-user-options">
								<button onClick={openDeleteModal} className="delete-button">
									Delete
								</button>
								<button className="edit-button">Edit</button>
							</div>
						) : (
							<button
								className="comments__comment-reply-button"
								onClick={openReplyBox}
							>
								Reply
							</button>
						)}
					</div>
					<p className="comments__comment-content">{content}</p>
				</div>
			</div>

			{replyOpen && <ReplyBox currentUser={currentUser} parentId={commentId} />}

			{replies.map((elem: any) => (
				<Reply
					key={String(Math.random())}
					id={elem.id}
					content={elem.content}
					createdAt={elem.createdAt}
					score={elem.score}
					user={elem.user}
					replyingTo={elem.replyingTo}
					currentUser={currentUser}
					deleteState={deleteOpen}
					setDeleteState={setDeleteOpen}
					openDeleteModal={openDeleteModal}
					parentId={commentId}
					parentUsername={username}
				/>
			))}
		</div>
	);
};

export default Comment;
