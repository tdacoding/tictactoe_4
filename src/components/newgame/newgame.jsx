import styles from './newgame.module.css';

const reset = ({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
	setMovesNumber,
}) => {
	setCurrentPlayer('X');
	setIsGameEnded(false);
	setIsDraw(false);
	setField(['', '', '', '', '', '', '', '', '']);
	setMovesNumber(9);
};

export const NewGame = (props) => {
	return (
		<button
			className={styles['newGameButton']}
			onClick={() => {
				reset(props);
			}}
		>
			New Game
		</button>
	);
};
