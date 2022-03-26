import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";
import { useState } from "react";

const Score = ({ score, parentId, commentId }: any) => {
	const [scoreState] = useState({
		plus: {
			score: Number(score) + 1,
		},
		minus: {
			score: Number(score) - 1,
		},
	});

	const handleScorePlus = () => {
		if (parentId !== undefined) {
			fetch(
				`https://mattreee-comment-api.herokuapp.com/scorereply/${parentId}/${commentId}`,
				{
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(scoreState.plus),
				}
			);
		}

		fetch(`https://mattreee-comment-api.herokuapp.com/score/${commentId}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(scoreState.plus),
		});
	};

	const handleScoreMinus = () => {
		if (parentId !== undefined) {
			fetch(
				`https://mattreee-comment-api.herokuapp.com/scorereply/${parentId}/${commentId}`,
				{
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(scoreState.minus),
				}
			);
		}

		fetch(`https://mattreee-comment-api.herokuapp.com/score/${commentId}`, {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(scoreState.minus),
		});
	};

	return (
		<div className="comments__comment-score">
			<form onSubmit={handleScorePlus}>
				<label>
					<img
						className="comments__comment-score-button"
						src={IconPlus}
						alt=""
					/>
					<input type="submit" />
				</label>
			</form>
			<p className="comments__comment-score-value">{score}</p>
			<form onSubmit={handleScoreMinus}>
				<label>
					<img
						className="comments__comment-score-button"
						src={IconMinus}
						alt=""
					/>
					<input type="submit" />
				</label>
			</form>
		</div>
	);
};

export default Score;
