import { useEffect } from "react";

const DeleteModal = ({ modalState, setModalState }: any) => {
	const closeModal = () => {
		setModalState(!modalState);
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
					<button className="deleteModal__button yes">YES, DELETE</button>
				</div>
			</div>
		</section>
	);
};

export default DeleteModal;
