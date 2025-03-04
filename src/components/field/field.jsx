import styles from './field.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ field, hasMoved }) => {
	const INDX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div className={styles['buttons-container']}>
			{INDX.map((ind) => {
				return (
					<button
						className={styles.button}
						key={ind}
						disabled={field[ind]}
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	hasMoved: PropTypes.func,
};

export const Field = (props) => {
	const {
		field,
		setField,
		currentPlayer,
		setCurrentPlayer,
		movesNumber,
		setMovesNumber,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
	} = { ...props };
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
		return false;
	};

	const hasMoved = (ind) => {
		if (!isGameEnded && !isDraw) {
			setMovesNumber((movesNumber) => movesNumber - 1);
			const newField = [...field];
			newField[ind] = currentPlayer;
			setField(newField);
			if (hasWinner(field)) {
				setIsGameEnded(true);
				return;
			}
			if (movesNumber == 2) {
				setIsDraw(true);
				return;
			}
			setCurrentPlayer((currentPlayer) => (currentPlayer === 'X' ? '0' : 'X'));
		}
	};
	return <FieldLayout field={props.field} hasMoved={hasMoved} />;
};

Field.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
