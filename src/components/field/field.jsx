import styles from './field.module.css';
import { useSelector, useDispatch } from 'react-redux';

export const Field = () => {
	const dispatch = useDispatch();
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const field = useSelector((state) => state.field);
	const movesNumber = useSelector((state) => state.movesNumber);
	const INDX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const hasWinner = (field) => {
		const sample = WIN_PATTERNS.map((winIndxs) => {
			return winIndxs
				.map((tripleElem) => {
					return field[tripleElem];
				})
				.join('');
		});
		const isTriple = sample.some((el) => {
			return el === 'XXX' || el === '000';
		});
		return isTriple;
	};

	const hasMoved = (ind) => {
		if (!isGameEnded && !isDraw) {
			const moves = movesNumber - 1;
			dispatch({ type: 'setMovesNumber', payload: movesNumber - 1 });
			const newField = [...field];
			newField[ind] = currentPlayer;
			dispatch({ type: 'setField', payload: newField });
			if (hasWinner(newField)) {
				dispatch({ type: 'setIsGameEnded', payload: true });
				return;
			}
			if (moves == 0) {
				dispatch({ type: 'setIsDraw', payload: true });
				return;
			}
			dispatch({
				type: 'setCurrentPlayer',
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
		}
	};

	return (
		<div className={styles['buttons-container']}>
			{INDX.map((ind) => {
				return (
					<button
						className={styles.button}
						key={ind}
						disabled={field[ind] || isGameEnded}
						onClick={() => {
							hasMoved(ind);
						}}
					>
						{field[ind]}
					</button>
				);
			})}
		</div>
	);
};
