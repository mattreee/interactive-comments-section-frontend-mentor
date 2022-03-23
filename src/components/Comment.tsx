/* eslint-disable jsx-a11y/anchor-is-valid */
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import IconReply from "../images/icon-reply.svg";

const Comment = ({ score, profileImage, username, content }: any) => {
	return (
		<div className="comments__comment">
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
					<img className="comments__comment-image" src={profileImage} alt="" />
					<h2 className="comments__comment-username">{username}</h2>
					<p className="comments__comment-time-ago">1 month ago</p>
					<a href="#" className="comments__comment-reply-button">
						<img src={IconReply} alt="" />
						Reply
					</a>
				</div>
				<p className="comments__comment-content">{content}</p>
			</div>
		</div>
	);
};

export default Comment;
