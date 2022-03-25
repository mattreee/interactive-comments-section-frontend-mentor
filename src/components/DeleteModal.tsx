import { useEffect } from "react";

const DeleteModal = ({
	modalState,
	setModalState,
	commentId,
	parentId,
}: any) => {
	const closeModal = () => {
		setModalState(!modalState);
	};

	const handleSubmit = () => {
		if (parentId !== undefined) {
			fetch(`http://localhost:3333/deletereply/${parentId}/${commentId}`, {
				method: "delete",
			});
			return;
		}

		fetch(`http://localhost:3333/delete/${commentId}`, {
			method: "delete",
		});
	};

	function clickOutsideContainer(e: any) {
		if (e.target.classList.contains("deleteModal")) {
			setModalState(!modalState);
		}
	}

	useEffect(() => {
		window.addEventListener("click", clickOutsideContainer);

		return () => {
			window.removeEventListener("click", clickOutsideContainer);
		};
	});

	return (
		<section className="deleteModal">
			<div className="deleteModal__container">
				<h2 className="deleteModal__title">Delete comment</h2>
				<p className="deleteModal__desc">
					Are you sure you want to delete this comment? This will remove the
					comment and can't be undone.
				</p>
				<div className="deleteModal__button-container">
					<button onClick={closeModal} className="deleteModal__button no">
						NO, CANCEL
					</button>
					<form onSubmit={handleSubmit}>
						<button type="submit" className="deleteModal__button yes">
							YES, DELETE
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default DeleteModal;
