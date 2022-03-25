/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import IconReply from "../images/icon-reply.svg";
import DeleteModal from "./DeleteModal";
import Reply from "./Reply";

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

	const openDeleteModal = () => {
		setDeleteOpen(!deleteOpen);
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
							<a href="#" className="comments__comment-reply-button">
								<img src={IconReply} alt="" />
								Reply
							</a>
						)}
					</div>
					<p className="comments__comment-content">{content}</p>
				</div>
			</div>
			<div>
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
					/>
				))}
			</div>
		</div>
	);
};

export default Comment;
